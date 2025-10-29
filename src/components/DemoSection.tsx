import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Camera, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DemoSection = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<"pest" | "clean" | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        analyzeImage();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    setResult(null);

    // Simulate AI analysis
    setTimeout(() => {
      const mockResult = Math.random() > 0.5 ? "pest" : "clean";
      setResult(mockResult);
      setIsAnalyzing(false);

      toast({
        title: mockResult === "pest" ? "Pest Detected!" : "No Pest Detected",
        description: mockResult === "pest" 
          ? "Aphids detected with 94% confidence. Immediate action recommended."
          : "Your crops are healthy! No pest activity detected.",
      });
    }, 2500);
  };

  return (
    <section id="demo" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Try It Yourself
          </h2>
          <p className="text-xl text-muted-foreground">
            Upload a crop image and see our AI pest detection in action
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-border shadow-strong">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-8">
                {/* Upload Area */}
                <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary/50 transition-colors">
                  {selectedImage ? (
                    <div className="space-y-4">
                      <img
                        src={selectedImage}
                        alt="Uploaded crop"
                        className="max-h-64 mx-auto rounded-lg shadow-medium"
                      />
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedImage(null);
                          setResult(null);
                        }}
                      >
                        Upload Different Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-center gap-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Upload className="w-8 h-8 text-primary" />
                        </div>
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <Camera className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          Upload or Capture Image
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          Support for JPG, PNG, HEIC • Max 10MB
                        </p>
                        <label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileUpload}
                            className="hidden"
                          />
                          <Button className="cursor-pointer" size="lg">
                            Choose Image
                          </Button>
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                {/* Analysis Status */}
                {isAnalyzing && (
                  <div className="text-center py-8 animate-fade-in">
                    <Loader2 className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Analyzing Image...
                    </h3>
                    <p className="text-muted-foreground">
                      Our AI is examining your crops for pest activity
                    </p>
                  </div>
                )}

                {/* Results */}
                {result && !isAnalyzing && (
                  <div className={`p-6 rounded-xl ${result === "pest" ? "bg-destructive/10 border-2 border-destructive/20" : "bg-primary/10 border-2 border-primary/20"} animate-scale-in`}>
                    <div className="flex items-start gap-4">
                      {result === "pest" ? (
                        <AlertTriangle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                      ) : (
                        <CheckCircle className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {result === "pest" ? "Pest Detected!" : "Crops Healthy!"}
                        </h3>
                        {result === "pest" ? (
                          <div className="space-y-2">
                            <p className="text-foreground">
                              <strong>Detection:</strong> Aphids (94% confidence)
                            </p>
                            <p className="text-foreground">
                              <strong>Severity:</strong> Moderate infestation
                            </p>
                            <p className="text-foreground">
                              <strong>Recommendation:</strong> Apply organic neem oil spray within 24 hours
                            </p>
                          </div>
                        ) : (
                          <p className="text-foreground">
                            No pest activity detected. Your crops are in excellent condition. Continue regular monitoring.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">2.5s</div>
                <div className="text-sm text-muted-foreground">Average Analysis Time</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-muted-foreground">Detection Accuracy</div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Pest Types Identified</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
