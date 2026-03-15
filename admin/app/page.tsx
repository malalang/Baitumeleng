import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  TrendingUp,
  Search,
  MoreVertical,
  ArrowUpRight,
  Clock
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Mock data for the dashboard
const RECENT_QUOTES = [
  { id: '1', name: 'James Wilson', service: 'T-Shirt Printing', date: '2024-05-15', status: 'Pending', quantity: 50 },
  { id: '2', name: 'Sarah Parker', service: '3D Signage', date: '2024-05-14', status: 'Completed', quantity: 2 },
  { id: '3', name: 'Tech Solutions Inc', service: 'Flyers', date: '2024-05-14', status: 'In Review', quantity: 5000 },
  { id: '4', name: 'Michael Chen', service: 'Binding', date: '2024-05-13', status: 'Pending', quantity: 15 },
  { id: '5', name: 'Emma Watson', service: 'Posters', date: '2024-05-12', status: 'Cancelled', quantity: 100 },
];

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-secondary/30">
      {/* Sidebar - Simple implementation */}
      <aside className="w-64 bg-primary text-white p-6 hidden lg:block">
        <div className="flex items-center gap-2 mb-12">
          <div className="bg-accent p-1.5 rounded">
            <LayoutDashboard className="text-primary h-5 w-5" />
          </div>
          <span className="font-bold text-xl tracking-tighter">ADMIN PANEL</span>
        </div>
        
        <nav className="space-y-1">
          <LinkItem icon={LayoutDashboard} label="Dashboard" active />
          <LinkItem icon={FileText} label="Quote Requests" />
          <LinkItem icon={Users} label="Customers" />
          <LinkItem icon={TrendingUp} label="Reports" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl text-foreground font-bold">Dashboard Overview</h1>
            <p className="text-muted-foreground">Welcome back, Administrator.</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search quotes..." className="pl-10 w-64 bg-white" />
            </div>
            <Button shadow-md>Export Reports</Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard title="Total Quotes" value="1,284" change="+12.5%" icon={FileText} />
          <StatCard title="Pending" value="48" change="-2.4%" icon={Clock} />
          <StatCard title="New Customers" value="126" change="+18.2%" icon={Users} />
          <StatCard title="Monthly Revenue" value="R45,200" change="+5.4%" icon={TrendingUp} />
        </div>

        {/* Recent Quotes Table */}
        <Card className="border-none shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Quote Requests</CardTitle>
            <Button variant="ghost" size="sm">View All <ArrowUpRight className="ml-1 h-4 w-4" /></Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {RECENT_QUOTES.map((quote) => (
                  <TableRow key={quote.id}>
                    <TableCell className="font-medium">{quote.name}</TableCell>
                    <TableCell>{quote.service}</TableCell>
                    <TableCell className="text-muted-foreground">{quote.date}</TableCell>
                    <TableCell>{quote.quantity.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={
                          quote.status === 'Completed' ? 'default' : 
                          quote.status === 'Pending' ? 'outline' : 
                          quote.status === 'Cancelled' ? 'destructive' : 'secondary'
                        }
                      >
                        {quote.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

function StatCard({ title, value, change, icon: Icon }: any) {
  return (
    <Card className="border-none shadow-sm">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-secondary rounded-lg">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${change.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {change}
          </span>
        </div>
        <h3 className="text-muted-foreground text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold mt-1 text-primary">{value}</p>
      </CardContent>
    </Card>
  );
}

function LinkItem({ icon: Icon, label, active = false }: any) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${active ? 'bg-accent text-primary' : 'hover:bg-white/10'}`}>
      <Icon className="h-4 w-4" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}
