import API from './api'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs';

const URL = API.root + "/ws";

function reconectionSocket(url) {
    let client;
    let isConected = false;
    let conectOnClose = true;
    let messageListeners = [];
    let stateChangeListeners = [];

    function on(fn) {
        messageListeners.push(fn);
    }

    function onSttateChange(fn) {
        stateChangeListeners.push(fn);
        return () => {
            stateChangeListeners = stateChangeListeners.filter(l => l !== fn);
        }
    }

    function start() {
        client = new WebSocket(URL);
        const stompClient = Stomp.over(ws);
        
        stompClient.connect('', '', () => {
            stompClient.subscribe(
                '/topic/public', function (message) {
                    console.log("recive message")
                    console.log(message.body)
                    setPosts(prevState => [...prevState, JSON.parse
                        (message.body)])
                    // console.log(posts)
                }
            );
        });
    }
}