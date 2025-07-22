import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Flame, Activity, Footprints } from 'lucide-react';

export function DailyGoals() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Goals</CardTitle>
        <CardDescription>Your progress for today. Keep it up!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="text-primary" />
              <p className="font-medium">Calories Burned</p>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">320</span> / 500 kcal
            </p>
          </div>
          <Progress value={64} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-2">
              <Activity className="text-primary" />
              <p className="font-medium">Workout Time</p>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">45</span> / 60 min
            </p>
          </div>
          <Progress value={75} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-2">
              <Footprints className="text-primary" />
              <p className="font-medium">Steps</p>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">8,210</span> / 10,000
            </p>
          </div>
          <Progress value={82} />
        </div>
      </CardContent>
    </Card>
  );
}
