import Link from "next/link"
import { Building, CreditCard, FileText, Home, Menu, MessageSquare, Search, Settings, User, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function RoomsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <nav className="grid gap-2 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Home className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="/students"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Users className="h-5 w-5" />
                Students
              </Link>
              <Link href="/rooms" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary">
                <Building className="h-5 w-5" />
                Rooms
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <CreditCard className="h-5 w-5" />
                Billing
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <MessageSquare className="h-5 w-5" />
                Complaints
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <FileText className="h-5 w-5" />
                Reports
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
              >
                <Settings className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex items-center gap-2">
          <Building className="h-6 w-6" />
          <span className="text-lg font-semibold">Hostel Manager</span>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            <User className="mr-2 h-4 w-4" />
            Profile
          </Button>
          <Button size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[250px] flex-col border-r bg-background md:flex">
          <nav className="grid gap-2 p-4 text-sm">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <Home className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/students"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <Users className="h-5 w-5" />
              Students
            </Link>
            <Link href="/rooms" className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 text-primary">
              <Building className="h-5 w-5" />
              Rooms
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <CreditCard className="h-5 w-5" />
              Billing
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <MessageSquare className="h-5 w-5" />
              Complaints
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <FileText className="h-5 w-5" />
              Reports
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:text-primary"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold">Rooms</h1>
              <p className="text-muted-foreground">Manage room allocations and maintenance</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search rooms..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[300px]"
                />
              </div>
              <Button>Add Room</Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="mt-6">
            <TabsList>
              <TabsTrigger value="all">All Rooms</TabsTrigger>
              <TabsTrigger value="occupied">Occupied</TabsTrigger>
              <TabsTrigger value="vacant">Vacant</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <RoomCard roomNumber="101" floor="1st Floor" capacity="2" occupants="2" status="occupied" />
                <RoomCard roomNumber="102" floor="1st Floor" capacity="2" occupants="1" status="partially-occupied" />
                <RoomCard roomNumber="103" floor="1st Floor" capacity="2" occupants="0" status="vacant" />
                <RoomCard roomNumber="104" floor="1st Floor" capacity="3" occupants="3" status="occupied" />
                <RoomCard
                  roomNumber="105"
                  floor="1st Floor"
                  capacity="2"
                  occupants="2"
                  status="maintenance"
                  maintenanceIssue="Leaking faucet"
                />
                <RoomCard roomNumber="201" floor="2nd Floor" capacity="2" occupants="2" status="occupied" />
                <RoomCard roomNumber="202" floor="2nd Floor" capacity="2" occupants="0" status="vacant" />
                <RoomCard roomNumber="203" floor="2nd Floor" capacity="1" occupants="1" status="occupied" />
                <RoomCard roomNumber="301" floor="3rd Floor" capacity="3" occupants="2" status="partially-occupied" />
              </div>
            </TabsContent>
            <TabsContent value="occupied" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <RoomCard roomNumber="101" floor="1st Floor" capacity="2" occupants="2" status="occupied" />
                <RoomCard roomNumber="104" floor="1st Floor" capacity="3" occupants="3" status="occupied" />
                <RoomCard roomNumber="201" floor="2nd Floor" capacity="2" occupants="2" status="occupied" />
                <RoomCard roomNumber="203" floor="2nd Floor" capacity="1" occupants="1" status="occupied" />
              </div>
            </TabsContent>
            <TabsContent value="vacant" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <RoomCard roomNumber="103" floor="1st Floor" capacity="2" occupants="0" status="vacant" />
                <RoomCard roomNumber="202" floor="2nd Floor" capacity="2" occupants="0" status="vacant" />
              </div>
            </TabsContent>
            <TabsContent value="maintenance" className="mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <RoomCard
                  roomNumber="105"
                  floor="1st Floor"
                  capacity="2"
                  occupants="2"
                  status="maintenance"
                  maintenanceIssue="Leaking faucet"
                />
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

interface RoomCardProps {
  roomNumber: string
  floor: string
  capacity: string
  occupants: string
  status: "occupied" | "partially-occupied" | "vacant" | "maintenance"
  maintenanceIssue?: string
}

function RoomCard({ roomNumber, floor, capacity, occupants, status, maintenanceIssue }: RoomCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Room {roomNumber}</CardTitle>
          {status === "occupied" && <Badge className="bg-green-500">Occupied</Badge>}
          {status === "partially-occupied" && <Badge className="bg-blue-500">Partially Occupied</Badge>}
          {status === "vacant" && <Badge className="bg-gray-500">Vacant</Badge>}
          {status === "maintenance" && <Badge className="bg-yellow-500">Maintenance</Badge>}
        </div>
        <p className="text-sm text-muted-foreground">{floor}</p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <span className="text-sm">Capacity:</span>
            <span className="text-sm font-medium">
              {capacity} {Number.parseInt(capacity) > 1 ? "students" : "student"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm">Occupants:</span>
            <span className="text-sm font-medium">
              {occupants} {Number.parseInt(occupants) > 1 || occupants === "0" ? "students" : "student"}
            </span>
          </div>
          {maintenanceIssue && (
            <div className="flex justify-between">
              <span className="text-sm">Issue:</span>
              <span className="text-sm font-medium">{maintenanceIssue}</span>
            </div>
          )}
          <div className="mt-4 flex justify-end">
            <Button size="sm">Manage</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

