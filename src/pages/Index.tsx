import { CompetitionCard } from "@/components/CompetitionCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Clock, Users } from "lucide-react";
import heroImage from "@/assets/competition-hero.jpg";

const Index = () => {
  const competitions = [
    {
      title: "Cricket Premier League",
      game: "Cricket",
      date: "March 15, 2024",
      time: "10:00 AM",
      venue: "Sports Stadium",
      location: "Mumbai, India",
      prize: "₹5,00,000",
      participants: 16,
      status: "upcoming" as const,
    },
    {
      title: "National Kabaddi Championship",
      game: "Kabaddi",
      date: "March 22, 2024",
      time: "3:00 PM",
      venue: "Indoor Sports Complex",
      location: "Delhi, India",
      prize: "₹3,00,000",
      participants: 12,
      status: "upcoming" as const,
    },
    {
      title: "Football Premier Cup",
      game: "Football",
      date: "April 5, 2024",
      time: "5:00 PM",
      venue: "Football Stadium",
      location: "Kolkata, India",
      prize: "₹8,00,000",
      participants: 24,
      status: "upcoming" as const,
    },
    {
      title: "Volleyball State Championship",
      game: "Volleyball",
      date: "April 12, 2024",
      time: "9:00 AM",
      venue: "Sports Arena",
      location: "Chennai, India",
      prize: "₹2,50,000",
      participants: 20,
      status: "upcoming" as const,
    },
    {
      title: "Basketball League Finals",
      game: "Basketball",
      date: "April 20, 2024",
      time: "7:00 PM",
      venue: "Indoor Court",
      location: "Bangalore, India",
      prize: "₹4,00,000",
      participants: 16,
      status: "upcoming" as const,
    },
    {
      title: "Table Tennis Open",
      game: "Table Tennis",
      date: "April 25, 2024",
      time: "11:00 AM",
      venue: "Sports Center",
      location: "Pune, India",
      prize: "₹1,50,000",
      participants: 32,
      status: "upcoming" as const,
    },
  ];

  const stats = [
    { icon: Trophy, label: "Total Prize Pool", value: "₹25L+" },
    { icon: Users, label: "Registered Teams", value: "140+" },
    { icon: Star, label: "Sports Categories", value: "6" },
    { icon: Clock, label: "Competition Period", value: "2 Months" },
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
            🏆 Multi-Sport Championship 2024
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            PLAY
            <br />
            COMPETE
            <br />
            WIN
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join India's biggest multi-sport championship featuring Cricket, Kabaddi, Football, 
            Volleyball and more. Compete with the best athletes across the nation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 py-4"
            >
              View Competitions
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-4"
            >
              Competition Rules
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
              Sports Competitions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover all the exciting sports competitions happening across India.
            </p>
          </div>
          
          <div className="grid gap-6 max-w-7xl mx-auto">
            {competitions.map((competition, index) => (
              <CompetitionCard key={index} {...competition} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;