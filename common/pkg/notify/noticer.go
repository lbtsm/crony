package notify

import (
	"fmt"
	"github.com/tmnhs/crony/common/pkg/utils"
	"strings"
	"time"
)

type Noticer interface {
	SendMsg(*Message)
}

type Message struct {
	Type      int
	IP        string
	Subject   string
	Body      string
	To        []string
	OccurTime string
}

var msgQueue chan *Message

func Init(mail *Mail, web *WebHook) {
	_defaultMail = &Mail{
		Port:     mail.Port,
		From:     mail.From,
		Host:     mail.Host,
		Secret:   mail.Secret,
		Nickname: mail.Nickname,
	}
	_defaultWebHook = &WebHook{
		Kind: web.Kind,
		Url:  web.Url,
	}
	msgQueue = make(chan *Message, 64)
}

func Send(msg *Message) {
	msgQueue <- msg
}

func Serve() {
	for {
		select {
		case msg := <-msgQueue:
			if msg == nil {

			}
			switch msg.Type {
			case 1:
				fmt.Println("send mail -----------------------", msg)
				//Mail
				msg.Check()
				fmt.Println("send mail2 -----------------------", msg)
				_defaultMail.SendMsg(msg)
				fmt.Println("send mail3 -----------------------", msg)
			case 2:
				//webhook
				fmt.Println("send webhook -----------------------", msg)
				msg.Check()
				go _defaultWebHook.SendMsg(msg)
			}
		}
	}
}

func (m *Message) Check() {
	if m.OccurTime == "" {
		m.OccurTime = time.Now().Format(utils.TimeFormatSecond)
	}
	//Remove the transfer character
	m.Body = strings.Replace(m.Body, "\"", "'", -1)
	m.Body = strings.Replace(m.Body, "\n", "", -1)
}
