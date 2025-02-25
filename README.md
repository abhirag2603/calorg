# Scheduling App

## Overview
A modern scheduling application built with **Next.js**, **Supabase**, and **Prisma**. This app allows users to manage their availability, create event types, and book meetings. Meetings are automatically added to **Google Calendar**, and participants receive email notifications. Users can also cancel or join meetings directly from the app.

## Features
- **Authentication**: Google and GitHub OAuth via Supabase.
- **Availability Management**: Users can set and update their availability.
- **Event Types**: Create and customize different types of events.
- **Meeting Booking**: Schedule meetings based on available time slots.
- **Google Calendar Integration**: Automatically sync booked meetings.
- **Meeting Management**: View, cancel, or join meetings from the dashboard.
- **Email Notifications**: Automated emails to participants upon booking.

## Tech Stack
- **Next.js**: Frontend & API routes
- **Supabase**: Authentication & database backend
- **Prisma**: ORM for database queries
- **Nylas API**: Event synchronization
- **Tailwind CSS**: Styling

## Installation
### Prerequisites
- Node.js & npm/yarn installed
- Supabase account & project set up
- Nylas API credentials for Calendar integration

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/scheduling-app.git
   cd scheduling-app
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Set up environment variables:
   Create a `.env.local` file and add the following:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   DATABASE_URL=your_database_url
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
4. Apply database migrations:
   ```sh
   npx prisma migrate dev
   ```
5. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```

## Usage
1. Sign in using Google or GitHub.
2. Set your availability in the profile section.
3. Create event types based on your needs.
4. Share event links to let others book meetings.
5. View booked meetings in the "Meetings" tab and Google Calendar.
6. Cancel or join meetings from the dashboard.

## Deployment
To deploy, use Vercel:
```sh
vercel
```
Ensure environment variables are set in your hosting provider.

## Future Enhancements
- Webhooks for real-time updates
- Reminders & notifications
- Custom branding for events
- Payment integration for paid bookings

## License
MIT License

## Contact
For questions or suggestions, reach out at [your-email@example.com].

