
import React from 'react';
import { Bell } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Mock notifications data
const notifications = [
  {
    id: 1,
    title: "New Release",
    message: "Stranger Things Season 5 is now available",
    time: "2 hours ago",
    isRead: false
  },
  {
    id: 2,
    title: "Continue Watching",
    message: "Continue watching The Witcher where you left off",
    time: "1 day ago",
    isRead: false
  },
  {
    id: 3,
    title: "Recommendation",
    message: "Based on your interests: Try Dark",
    time: "3 days ago",
    isRead: true
  }
];

const NotificationsDropdown = () => {
  const unreadCount = notifications.filter(n => !n.isRead).length;
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white relative">
          <Bell size={20} />
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-netflix-black" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 bg-netflix-black border-gray-800">
        <DropdownMenuLabel className="font-normal">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Notifications</span>
            {unreadCount > 0 && <span className="text-xs text-gray-400">{unreadCount} unread</span>}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-800" />
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className={`px-4 py-3 focus:bg-gray-800 ${!notification.isRead ? 'bg-gray-900' : ''}`}>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex justify-between">
                  <span className="font-medium">{notification.title}</span>
                  <span className="text-xs text-gray-400">{notification.time}</span>
                </div>
                <p className="text-sm text-gray-300">{notification.message}</p>
              </div>
            </DropdownMenuItem>
          ))
        ) : (
          <div className="py-6 text-center text-gray-400">No notifications</div>
        )}
        <DropdownMenuSeparator className="bg-gray-800" />
        <DropdownMenuItem className="text-center text-sm text-netflix cursor-pointer justify-center py-2">
          See all notifications
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationsDropdown;
