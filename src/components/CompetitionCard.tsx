import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy, Users, Info, UserPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CompetitionCardProps {
  title: string;
  game: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  prize: string;
  participants: number;
  status: "upcoming" | "live" | "ended";
  onViewDetails: () => void;
  onRegister: () => void;
}

export const CompetitionCard = ({
  title,
  game,
  date,
  time,
  venue,
  location,
  prize,
  participants,
  status,
  onViewDetails,
  onRegister,
}: CompetitionCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case "upcoming":
        return "bg-gradient-primary border-primary/20 text-primary-foreground";
      case "live":
        return "bg-success border-success/20 text-success-foreground";
      case "ended":
        return "bg-muted border-border text-muted-foreground";
    }
  };

  return (
    <Card className="overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 group">
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            {title}
          </CardTitle>
          <Badge className={getStatusColor()}>
            {status.toUpperCase()}
          </Badge>
        </div>
        <p className="text-muted-foreground text-lg">{game}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <Calendar className="w-5 h-5 text-primary" />
            <div>
              <p className="font-semibold">{date}</p>
              <p className="text-sm text-muted-foreground">{time}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <MapPin className="w-5 h-5 text-accent" />
            <div>
              <p className="font-semibold">{venue}</p>
              <p className="text-sm text-muted-foreground">{location}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <Trophy className="w-5 h-5 text-accent" />
            <div>
              <p className="font-semibold">Prize Pool</p>
              <p className="text-sm text-primary font-bold">{prize}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
            <Users className="w-5 h-5 text-primary" />
            <div>
              <p className="font-semibold">Participants</p>
              <p className="text-sm text-muted-foreground">{participants} registered</p>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 mt-6">
          <Button 
            onClick={onRegister}
            className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300"
          >
            <UserPlus className="w-4 h-4 mr-2" />
            Register Now
          </Button>
          <Button 
            variant="outline" 
            onClick={onViewDetails}
            className="flex-1 border-primary/30 hover:bg-primary/10"
          >
            <Info className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};