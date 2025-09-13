import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Gamepad2, Send, User, Mail, Phone, Trophy } from "lucide-react";

export const PlayerApplicationForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    playerName: "",
    email: "",
    phone: "",
    gameExperience: "",
    previousTournaments: "",
    teamName: "",
    expectations: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted!",
      description: "Your registration has been received. Check your email for confirmation.",
    });
    
    setIsSubmitting(false);
    setFormData({
      playerName: "",
      email: "",
      phone: "",
      gameExperience: "",
      previousTournaments: "",
      teamName: "",
      expectations: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
          <Gamepad2 className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Player Registration
        </CardTitle>
        <p className="text-muted-foreground">
          Join the ultimate gaming competition and showcase your skills!
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="playerName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Player Name
              </Label>
              <Input
                id="playerName"
                type="text"
                placeholder="Enter your gaming name"
                value={formData.playerName}
                onChange={(e) => handleInputChange("playerName", e.target.value)}
                required
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                required
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gameExperience" className="flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Gaming Experience
              </Label>
              <Select onValueChange={(value) => handleInputChange("gameExperience", value)}>
                <SelectTrigger className="bg-secondary/50 border-border focus:border-primary">
                  <SelectValue placeholder="Select your level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                  <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                  <SelectItem value="professional">Professional (5+ years)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="teamName">Team Name (Optional)</Label>
            <Input
              id="teamName"
              type="text"
              placeholder="Enter your team name if participating as a team"
              value={formData.teamName}
              onChange={(e) => handleInputChange("teamName", e.target.value)}
              className="bg-secondary/50 border-border focus:border-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="previousTournaments">Previous Tournament Experience</Label>
            <Textarea
              id="previousTournaments"
              placeholder="Tell us about your previous tournament participations and achievements..."
              value={formData.previousTournaments}
              onChange={(e) => handleInputChange("previousTournaments", e.target.value)}
              className="bg-secondary/50 border-border focus:border-primary min-h-[100px]"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="expectations">What are your expectations from this tournament?</Label>
            <Textarea
              id="expectations"
              placeholder="Share your goals and what you hope to achieve in this competition..."
              value={formData.expectations}
              onChange={(e) => handleInputChange("expectations", e.target.value)}
              className="bg-secondary/50 border-border focus:border-primary min-h-[100px]"
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
          >
            {isSubmitting ? (
              "Submitting Application..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Register for Competition
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};