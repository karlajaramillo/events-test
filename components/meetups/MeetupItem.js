import Card from '../ui/Card'
import classes from './MeetupItem.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

function MeetupItem (props) {
  // props -> props.id, props.title, props.image...
  const router = useRouter();
  function showDetailsHandler () {
    //router.push('/' + props.id); 
    router.push(`/${props.id}`); // navigate programatically, instead of Link
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          {/* <button onClick={showDetailsHandler}>Show Details</button> */}
          <Link href={`/${props.id}`}>Show Details</Link>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
