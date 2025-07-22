import { SidebarInset } from '@/components/ui/sidebar';
import { DailyGoals } from '@/components/dashboard/daily-goals';
import { WorkoutLogger } from '@/components/dashboard/workout-logger';
import { ProgressChart } from '@/components/dashboard/progress-chart';
import { WaterTracker } from '@/components/dashboard/water-tracker';
import { AiRecommendations } from '@/components/dashboard/ai-recommendations';

export default function Home() {
  return (
    <SidebarInset>
      <main className="p-4 md:p-6 lg:p-8 space-y-8">
        <header>
          <h1 className="text-3xl font-headline font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, let's crush those goals today!</p>
        </header>

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-8">
                <WorkoutLogger />
                <ProgressChart />
            </div>
            <div className="lg:col-span-1 space-y-8">
                <DailyGoals />
                <WaterTracker />
            </div>
        </div>

        <AiRecommendations />
        
      </main>
    </SidebarInset>
  );
}
