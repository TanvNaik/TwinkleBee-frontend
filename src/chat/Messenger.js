import React, { useEffect, useRef, useState } from 'react'
import './messenger.css'
import Base from '../core/Base'
import Conversation from './conversations/Conversation'
import Message from './message/message'
import { createConversation, createMessage, getMessages, getUserConversations } from './helper/chatapicalls'
import { useParams } from 'react-router-dom'
import { getUser } from '../user/helper/userapicalls'
import { isAuthenticated } from '../auth/helper'
const Messenger = () => {
    const [conversations, setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newConv, setNewConv] = useState([])
    const [newUser, setNewUser] = useState("")
    const [error, setError] = useState("")
    const {user, token} = isAuthenticated()
    const [message, setMessage] = useState("Write a message...")
    const scrollRef = useRef()
    const userId = useParams().chatUserId
    
    useEffect(() => {

        if(userId){
            getUser(userId, token, user._id)
            .then(data => {
                setNewUser(data.user)
            setCurrentChat({
                members: [user, data.user]
            })
        })
        }else{
            setCurrentChat(null)
            setNewUser(false)
        }
    
       
    },[])
    
    

    useEffect(() => {
        getUserConversations(user._id, token)
        .then(data => {
            setConversations(data.conversations)          
        }).catch(err => console.log(err))
    },[])

    const loadChat = () => {
        if(currentChat){
            console.log(currentChat)
            if(currentChat._id){
                getMessages(currentChat._id)
            .then(data => {
                if(data.error){
                    setError(data.error)
                }else{
                    console.log(data.message)
                    setMessages(data.message)
                }
            })}
            else{
                setNewConv(true)
            }
            }
        
    }
    const errorMessage = () =>{
        if(error){
            return (
                <div className="errorMessage">
                    <h2>{error}</h2>
                </div>
            )
        }
    }
    useEffect(() => {
        loadChat()
    }, [currentChat])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    },[messages])

    const handleChange =() =>(e) => {
        setMessage(e.target.value)
    }
    const handleClick = (conversation) => {
        setCurrentChat(conversation)
    }

    const sendMessage = () => {
        
        const mess = {
            conversationId: currentChat._id,
            sender: user._id,
            content: message
        }

        createMessage(mess).then(data => {
            if(data.error) {
                setError("Unable to send message")
            }else{
                setMessages([...messages, data.message])
                setMessage("")
            }
        }).catch(err => console.log(err))
    }

    const sendNewMessage = () => {
        //create conversation
        const convo = {
            sender:user._id,
            receiver: newUser._id
        }
        createConversation(convo).then(
            data => {
                if(data.error){
                    setError(data.error)
                }else{
                    //createmessage 
                    const conversation = data.conversation
                    const mess = {
                        conversationId: data.conversation._id,
                        sender: user._id,
                        content: message
                    }
                    createMessage(mess).then(data => {
                        if(data.error) {
                            setError("Unable to send message")
                        }else{
                            //setnewConv to false and set currentchat(conversationId)
                            setNewConv(false)
                            setCurrentChat(conversation)
                            setMessage("")
                        }
                    }).catch(err => console.log(err))
                }
            }
        )
    }
    const messenger = () => {
        return (
            <div className="messenger containerd-flex ">
                <div className="chatMenu w-25 ">
                    <div className="chatMenuWrapper ">
                        <input type="text" placeholder='Search' className='chatMenuInput form-control' />
                        {conversations && conversations.map((conversation, key) => {
                                let member = conversation.members[0].name === user.name ? conversation.members[1] : 
                                conversation.members[0]
                                return(
                                    <span key={key} onClick={() => handleClick(conversation)}>
                                    <Conversation conversation={conversation} conversationImg={`http://localhost:8800/image/${member.profile_pic}`}  conversationName={member.name} currentUser={user} token={token}/>
                                    </span>
                                )
                            }) 
                        }
                                     
                    </div>  
                </div>
                <div className="chatBox w-75 ">
                    <div className="chatBoxWrapper d-flex text-center"> 
                        {
                            currentChat ?
                            <>
                                <div className="chatBoxName h-25">
                                    <div className="chatName">
                                    {
                                        currentChat.members[0].name === user.name ? currentChat.members[1].name : 
                                        currentChat.members[0].name
                                    }
                                    </div>
                               
                               <div style={{'height': '3rem' }}></div>
                                { newConv== true ? (
                                <div className="chatBoxTop overflow-auto h-75" >
                                                <div ref={scrollRef}>
                                                <Message message="Start Conversation" own="new" /></div>
                                            </div>) : (
                                    messages && messages.map((message, key) => {
                                        return (
                                            <div className="chatBoxTop" key={key}>
                                                <div ref={scrollRef}>
                                                <Message message= {message}
                                                own={
                                                    message.sender._id == user._id ? "own" : ""
                                                } /></div>
                            
                                            </div>
                                        )
                                    })
                                    )
                                }
                          </div>
                                
                                <div className="chatBoxBottom d-flex w-100">
                                    <div className="chatMessageInput w-75 ">
                                        <br />
                                        <input className='text-area form-control' name="message" placeholder={message} onChange={handleChange()}></input>
                                    </div>
                                    <div className='w-25'>
                                    {newConv ? (<button className='chatSubmitButton w-50 ' onClick={sendNewMessage}>Send</button>): (<button className='chatSubmitButton w-50 ' onClick={sendMessage}>Send</button>)}
                                    </div>
                                   
                                    
                                </div>
                            </>
                            :
                            <span className="noConversationText">Open a conversation to chat</span>

                        }
                    </div> 
                </div>
            </div>
        )
    }


    return (
        <Base title="">
            {errorMessage()}
           {messenger()}
        </Base>
    )
}

export default Messenger
