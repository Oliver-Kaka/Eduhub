import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 z-50 bg-primary hover:bg-primary/90 animate-fade-in"
        size="icon"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <MessageCircle className="w-6 h-6 text-primary-foreground" />
        )}
      </Button>

      {/* Chat Popup */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] shadow-2xl z-50 animate-scale-in flex flex-col border-2">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              AI Study Assistant
            </h3>
            <p className="text-sm opacity-90 mt-1">
              Ask me anything about your courses!
            </p>
          </div>

          {/* Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-muted/30">
            <div className="space-y-4">
              <div className="bg-card p-3 rounded-lg shadow-sm border max-w-[85%]">
                <p className="text-sm">
                  👋 Hello! I'm your AI study assistant. How can I help you today?
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-card">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background"
              />
              <Button size="sm" className="px-4">
                Send
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default FloatingChatButton;
