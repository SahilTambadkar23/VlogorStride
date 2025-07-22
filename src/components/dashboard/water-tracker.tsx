'use client';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, GlassWater } from 'lucide-react';

export function WaterTracker() {
  const [waterCount, setWaterCount] = useState(3);
  const dailyGoal = 8;

  const handleIncrement = () => {
    if (waterCount < 20) { // Set a reasonable max
        setWaterCount(count => count + 1);
    }
  };

  const handleDecrement = () => {
    if (waterCount > 0) {
      setWaterCount(count => count - 1);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Water Intake</CardTitle>
        <CardDescription>Stay hydrated to fuel your performance.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={handleDecrement} disabled={waterCount === 0} aria-label="Decrease water count">
                <Minus />
            </Button>
            <div className="flex items-end gap-2 text-primary">
                <GlassWater className="size-12" strokeWidth={1.5} />
                <span className="text-5xl font-bold text-foreground">{waterCount}</span>
                <span className="text-lg text-muted-foreground">/ {dailyGoal}</span>
            </div>
            <Button variant="outline" size="icon" onClick={handleIncrement} aria-label="Increase water count">
                <Plus />
            </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          {waterCount >= dailyGoal ? "Great job! You've reached your daily goal." : `You're ${dailyGoal - waterCount} glasses away from your goal.`}
        </p>
      </CardContent>
    </Card>
  );
}
