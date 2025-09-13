import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users, Clock, Target } from "lucide-react";

interface GameDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  competition: {
    title: string;
    game: string;
    date: string;
    time: string;
    venue: string;
    location: string;
    prize: string;
    participants: number;
    status: "upcoming" | "live" | "ended";
  };
}

const gameDetails = {
  "Cricket": {
    description: "Experience the thrill of cricket with professional teams competing in T20 format.",
    rules: ["11 players per team", "20 overs per innings", "Powerplay in first 6 overs", "Strategic timeout allowed"],
    equipment: ["Cricket bat", "Ball", "Stumps", "Protective gear"],
    duration: "3-4 hours per match"
  },
  "Kabaddi": {
    description: "Traditional Indian contact sport showcasing strength, strategy and teamwork.",
    rules: ["7 players per team", "2 halves of 20 minutes", "No equipment required", "Touch and return strategy"],
    equipment: ["Sports attire", "Knee pads (optional)", "Athletic shoes"],
    duration: "40 minutes per match"
  },
  "Football": {
    description: "The beautiful game with 11 vs 11 professional football action.",
    rules: ["11 players per team", "90 minutes (2 halves)", "Offside rule applies", "VAR technology used"],
    equipment: ["Football boots", "Shin guards", "Team jersey", "Goalkeeper gloves"],
    duration: "90 minutes + extra time"
  },
  "Volleyball": {
    description: "Fast-paced indoor volleyball with professional teams and exciting rallies.",
    rules: ["6 players per team", "Best of 5 sets", "25 points per set", "3 touches per side max"],
    equipment: ["Volleyball", "Net", "Athletic shoes", "Knee pads"],
    duration: "60-90 minutes per match"
  },
  "Basketball": {
    description: "High-energy basketball with professional players and exciting dunks.",
    rules: ["5 players per team", "4 quarters of 12 minutes", "24-second shot clock", "3-point line"],
    equipment: ["Basketball", "Basketball shoes", "Team uniform", "Protective gear"],
    duration: "48 minutes + timeouts"
  },
  "Table Tennis": {
    description: "Fast-paced table tennis with world-class players and precision shots.",
    rules: ["Singles and doubles", "Best of 5/7 games", "11 points per game", "Serve alternates every 2 points"],
    equipment: ["Table tennis bat", "Ball", "Table", "Net"],
    duration: "30-60 minutes per match"
  }
};

export const GameDetailsModal = ({ isOpen, onClose, competition }: GameDetailsModalProps) => {
  const details = gameDetails[competition.game as keyof typeof gameDetails];

  const handleRegister = () => {
    // Simulate registration
    alert(`Registration started for ${competition.title}!`);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-card border-border/50">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {competition.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Competition Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <Calendar className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold">{competition.date}</p>
                <p className="text-sm text-muted-foreground">{competition.time}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <MapPin className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold">{competition.venue}</p>
                <p className="text-sm text-muted-foreground">{competition.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <Trophy className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold">Prize Pool</p>
                <p className="text-sm text-primary font-bold">{competition.prize}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
              <Users className="w-5 h-5 text-primary" />
              <div>
                <p className="font-semibold">Participants</p>
                <p className="text-sm text-muted-foreground">{competition.participants} teams</p>
              </div>
            </div>
          </div>

          {/* Game Details */}
          {details && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">About {competition.game}</h3>
              <p className="text-muted-foreground">{details.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Key Rules
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {details.rules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Match Duration
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">{details.duration}</p>
                  
                  <h4 className="font-semibold mb-2">Equipment Required</h4>
                  <div className="flex flex-wrap gap-1">
                    {details.equipment.map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <Button 
              onClick={handleRegister}
              className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="flex-1 border-primary/30 hover:bg-primary/10"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};