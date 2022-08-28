import './App.css';
import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';
import Auth from './Auth';
import Note from './Note';

export const supabase = createClient(
  // url
  'https://zhbfcnhuxgcxkmjgwkib.supabase.co',  
   // anon key
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpoYmZjbmh1eGdjeGttamd3a2liIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjEzOTk0NjUsImV4cCI6MTk3Njk3NTQ2NX0.2D8g4kDsFefwhBkZ2opBRNiNfz0mt93JXwUzyBWlido'
)

function App() {

  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="App">
      {!session ? (
        <Auth />
      ) : (
        <Note key={session.user.id} session={session} />
      )}
    </div>
  );
}

export default App;
