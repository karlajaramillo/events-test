//#pages/[meetupId]/index.js
import { Fragment } from 'react'
import Head from 'next/head'
import { MongoClient, ObjectId } from 'mongodb'
import MeetupDetail from '../../components/meetups/MeetupDetail'

function MeetupDetails (props) {
  // we need to fetch data to show the details
  return (


      <Fragment>
        <Head>
          <title>{props.meetupData.title}</title>
          <meta name='description' content={props.meetupData.description} />
        </Head>
        <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
      </Fragment>
    

  )
}

export async function getStaticPaths () {
  // Connect to the DB and get access to the meetups collection
  const client = await MongoClient.connect(
    'mongodb+srv://kavajaga:Events2022@cluster0.zvp9ap3.mongodb.net/Meetups?retryWrites=true&w=majority'
  )

  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  // toArray() -> to convert into JS object
  const result = await meetupsCollection.find({}, { _id: 1 }).toArray()
  // find accepts two arguments
  // 1 arg - {} -> give me all without filters
  // 2 arg - {} -> extract only the field I need.
  // {_id: 1} -> only includes the ID

  client.close()
  return {
    // false -> indicates that you define all paths here
    // true -> if you define only the popular pages, not all of them, so it will generate when the request is made
    // true or 'blocking' we are telling NextJS that the list of paths
    // so NextJS response will pre-generated when need it.
    // true -> immediately return the blank page
    // 'blocking' -> only will show something when the page is pregenerated
    fallback: 'blocking',
    // paths: [
    //   {
    //     params: {
    //       meetupId: 'm1',
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: 'm2',
    //     },
    //   }
    // ]
    // map the result to get an --> array with ids
    paths: result.map(item => ({
      // the first parenthesis means return an object {}
      params: {
        meetupId: item._id.toString()
      }
    }))
  }
}

export async function getStaticProps (context) {
  // fetch data for a single meetup
  // get the id
  // params.meetupId because the file name is --> [meetupId]
  const meetupId = context.params.meetupId // string from the url
  //const {meetupId} = context.params;
  //console.log(meetupId)


  // Now with the id from the Database, we can find this document into the DB with findOne
  const client = await MongoClient.connect(
    'mongodb+srv://kavajaga:Events2022@cluster0.zvp9ap3.mongodb.net/Meetups?retryWrites=true&w=majority'
  )

  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  // toArray() -> to convert into JS object
  //console.log(meetupId)
  // findOne -> we passed an object
  // convert the string id from the url --> to object to find the docuement inside db
  // wrap the url id with --> ObjectId(meetupId) -> to convert it into Object
  const selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) })
  console.log(selectedMeetup)
  client.close()

  //return {
  // props: {
  //   meetupData: {
  //     id: meetupId,
  //     title: 'The First Meetup',
  //     image:
  //       'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244',
  //     address: 'Chicago',
  //     description: 'This is a second meetup'
  //   }
  // }
  //}
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(), // to avoid 'Serialization' problem
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image
      }
    }
  }
}
export default MeetupDetails
