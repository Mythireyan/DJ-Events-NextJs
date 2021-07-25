import Link from 'next/link';
import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import {API_URL} from "./config/index";

export default function Home({events}) {
  console.log(events)
  return (
    <div>
      <Layout>
        <h1>Upcoming Events</h1>
        {
          events.length === 0 && <h3>Currently there are no events</h3>
        }
        {
          events.map((event)=>(
            <EventItem key={event.id} evt={event}/>
            )
          )
        }
        {
          events.length>0 && (
            <Link href='/events'>
              <a className='btn-secondary'>
                View All Events
              </a>
            </Link>
          )
        }
      </Layout>
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=3`);
  const events = await res.json()
  
  return{
    props:{events},
    revalidate:1
  }
}