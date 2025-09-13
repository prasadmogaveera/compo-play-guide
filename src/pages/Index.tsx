import { useState } from "react";
import { CompetitionCard } from "@/components/CompetitionCard";
import { GameDetailsModal } from "@/components/GameDetailsModal";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [selectedCompetition, setSelectedCompetition] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (competition: any) => {
    setSelectedCompetition(competition);
    setIsModalOpen(true);
  };

  const handleRegister = (competition: any) => {
    alert(`Registration started for ${competition.title}!`);
  };

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 bg-gradient-to-br from-background/20 via-background/10 to-background/30" />
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
          <Badge className="mb-6 bg-gradient-primary border-primary/20 text-primary-foreground text-lg px-6 py-2">
            🏆 Multi-Sport Championship 2024
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            SPORTS
            <br />
            CHAMPIONSHIP
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Join India's biggest multi-sport event
          </p>
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
              <CompetitionCard 
                key={index} 
                {...competition} 
                onViewDetails={() => handleViewDetails(competition)}
                onRegister={() => handleRegister(competition)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Game Details Modal */}
      {selectedCompetition && (
        <GameDetailsModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          competition={selectedCompetition}
        />
      )}
    </div>
  );
};

export default Index;