import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Send, FileText, MessageSquare, BookOpen } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";

const AITools = () => {
  const [loading, setLoading] = useState(false);
  const [summaryText, setSummaryText] = useState("");
  const [summaryResult, setSummaryResult] = useState("");
  const [chatMessages, setChatMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [chatInput, setChatInput] = useState("");
  const [studyTopic, setStudyTopic] = useState("");
  const [studyPlan, setStudyPlan] = useState("");

  const handleSummarize = async () => {
    if (!summaryText.trim()) {
      toast({
        title: "Error",
        description: "Please enter text to summarize",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("google-ai", {
        body: {
          type: "summarize",
          text: summaryText,
        },
      });

      if (error) throw error;
      setSummaryResult(data.result);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to generate summary",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChat = async () => {
    if (!chatInput.trim()) return;

    const userMessage = { role: "user", content: chatInput };
    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("google-ai", {
        body: {
          type: "chat",
          messages: [...chatMessages, userMessage],
        },
      });

      if (error) throw error;

      setChatMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.result },
      ]);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateStudyPlan = async () => {
    if (!studyTopic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a topic",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("google-ai", {
        body: {
          type: "study-plan",
          topic: studyTopic,
        },
      });

      if (error) throw error;
      setStudyPlan(data.result);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to generate study plan",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">AI Study Tools</h1>
            <p className="text-muted-foreground">
              Enhance your learning with AI-powered tools
            </p>
          </div>

          <Tabs defaultValue="summarize" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="summarize">
                <FileText className="w-4 h-4 mr-2" />
                Summarize
              </TabsTrigger>
              <TabsTrigger value="chat">
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="study-plan">
                <BookOpen className="w-4 h-4 mr-2" />
                Study Plan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="summarize" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Text Summarizer</CardTitle>
                  <CardDescription>
                    Get concise summaries of long texts, articles, or notes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="summary-text">Text to Summarize</Label>
                    <Textarea
                      id="summary-text"
                      placeholder="Paste your text here..."
                      value={summaryText}
                      onChange={(e) => setSummaryText(e.target.value)}
                      rows={8}
                    />
                  </div>
                  <Button
                    onClick={handleSummarize}
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Summarizing...
                      </>
                    ) : (
                      "Summarize"
                    )}
                  </Button>
                  {summaryResult && (
                    <div className="space-y-2">
                      <Label>Summary</Label>
                      <div className="p-4 bg-muted rounded-md">
                        <p className="whitespace-pre-wrap">{summaryResult}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chat" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>AI Study Assistant</CardTitle>
                  <CardDescription>
                    Ask questions and get help with your studies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-[400px] overflow-y-auto space-y-4 p-4 bg-muted/50 rounded-md">
                    {chatMessages.length === 0 ? (
                      <p className="text-center text-muted-foreground">
                        Start a conversation with your AI study assistant
                      </p>
                    ) : (
                      chatMessages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`p-3 rounded-lg ${
                            msg.role === "user"
                              ? "bg-primary text-primary-foreground ml-auto max-w-[80%]"
                              : "bg-card max-w-[80%]"
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        </div>
                      ))
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Ask a question..."
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleChat()}
                      disabled={loading}
                    />
                    <Button onClick={handleChat} disabled={loading} size="icon">
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="study-plan" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Study Plan Generator</CardTitle>
                  <CardDescription>
                    Create a personalized study plan for any topic
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="study-topic">Topic</Label>
                    <Input
                      id="study-topic"
                      placeholder="e.g., Calculus II, World War II, Python Programming"
                      value={studyTopic}
                      onChange={(e) => setStudyTopic(e.target.value)}
                    />
                  </div>
                  <Button
                    onClick={handleGenerateStudyPlan}
                    disabled={loading}
                    className="w-full"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      "Generate Study Plan"
                    )}
                  </Button>
                  {studyPlan && (
                    <div className="space-y-2">
                      <Label>Your Study Plan</Label>
                      <div className="p-4 bg-muted rounded-md">
                        <p className="whitespace-pre-wrap">{studyPlan}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default AITools;
