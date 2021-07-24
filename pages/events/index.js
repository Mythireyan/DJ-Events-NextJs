import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import {API_URL} from "../config/index";

export default function Events({events}) {
  console.log(events)
  return (
    <div>
      <Layout>
        <h1>Events</h1>
        {
          events.length === 0 && <h3>Currently there are no events</h3>
        }
        {
          events.map((event)=>(
            <EventItem key={event.id} evt={event}/>
            )
          )
        }
      </Layout>
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json()
  
  return{
    props:{events},
    revalidate:1
  }
}
