
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      message: "Hello! I'm here to help you with any questions about our thumbnail design services. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    hasProvidedInfo: false
  });
  const { toast } = useToast();

  const sendToTelegram = async (message: string, userInfo: any) => {
    // In a real app, this would send to your Telegram bot
    // For now, we'll simulate it with a console log and toast
    console.log("Sending to Telegram:", {
      message,
      userInfo,
      timestamp: new Date().toISOString()
    });
    
    toast({
      title: "Message sent!",
      description: "We'll respond to your message shortly.",
    });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    if (!userInfo.hasProvidedInfo) {
      toast({
        title: "Please provide your details",
        description: "We need your name and email to assist you better.",
        variant: "destructive"
      });
      return;
    }

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      message: newMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    
    // Send to Telegram
    await sendToTelegram(newMessage, userInfo);
    
    setNewMessage("");

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        message: "Thank you for your message! One of our team members will get back to you shortly. In the meantime, feel free to browse our services or check out our portfolio.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleUserInfoSubmit = () => {
    if (!userInfo.name || !userInfo.email) {
      toast({
        title: "Required fields missing",
        description: "Please provide both your name and email.",
        variant: "destructive"
      });
      return;
    }

    setUserInfo(prev => ({ ...prev, hasProvidedInfo: true }));
    
    const welcomeMessage = {
      id: messages.length + 1,
      type: "bot",
      message: `Thanks ${userInfo.name}! Now I can assist you better. What would you like to know about our thumbnail design services?`,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, welcomeMessage]);
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full h-14 w-14 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 z-50 w-80 h-96 shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between pb-3">
        <div>
          <CardTitle className="text-lg">Live Chat</CardTitle>
          <CardDescription>We're here to help!</CardDescription>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(false)}
          className="h-6 w-6"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="flex flex-col h-full p-4">
        {!userInfo.hasProvidedInfo ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Please provide your details to start chatting:
            </p>
            <Input
              placeholder="Your name"
              value={userInfo.name}
              onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
            />
            <Input
              type="email"
              placeholder="Your email"
              value={userInfo.email}
              onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
            />
            <Button onClick={handleUserInfoSubmit} className="w-full">
              Start Chat
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-lg text-sm ${
                      message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p>{message.message}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default LiveChat;
