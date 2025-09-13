import { CompetitionCard } from "@/components/CompetitionCard";
import { PlayerApplicationForm } from "@/components/PlayerApplicationForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Clock, Users } from "lucide-react";
import heroImage from "@/assets/competition-hero.jpg";

const Index = () => {
  const competitions = [
    {
      title: "Pro League Championship",
      game: "Counter-Strike 2",
      date: "March 25, 2024",
      time: "2:00 PM EST",
      venue: "Gaming Arena",
      location: "Los Angeles, CA",
      prize: "$50,000",
      participants: 128,
      status: "upcoming" as const,
    },
    {
      title: "Battle Royale Masters",
      game: "Fortnite",
      date: "April 10, 2024",
      time: "6:00 PM EST",
      venue: "Convention Center",
      location: "Las Vegas, NV",
      prize: "$25,000",
      participants: 64,
      status: "upcoming" as const,
    },
  ];

  const stats = [
    { icon: Trophy, label: "Total Prize Pool", value: "$100K+" },
    { icon: Users, label: "Registered Players", value: "500+" },
    { icon: Star, label: "Professional Teams", value: "32" },
    { icon: Clock, label: "Tournament Duration", value: "3 Days" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <Badge className="mb-6 bg-gradient-primary border-primary/20 text-primary-foreground text-lg px-6 py-2">
            🏆 Ultimate Gaming Championship 2024
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            COMPETE
            <br />
            CONQUER
            <br />
            CHAMPION
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join the most prestigious gaming competition of the year. Battle against the best players, 
            win incredible prizes, and claim your place in gaming history.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
            >
              Register Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-4"
            >
              View Schedule
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Upcoming Competitions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your battleground and register for the competitions that match your expertise.
            </p>
          </div>
          
          <div className="grid gap-8 max-w-4xl mx-auto">
            {competitions.map((competition, index) => (
              <CompetitionCard key={index} {...competition} />
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Compete?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Fill out the registration form below and secure your spot in the competition.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <PlayerApplicationForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;