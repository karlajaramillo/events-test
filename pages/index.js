// In NextJS you can import server side and client side
import Head from 'next/head'

import { Fragment } from 'react'

import { MongoClient } from 'mongodb' // this will be included ONLY in the SERVER

import MeetupList from '../components/meetups/MeetupList' // CLIENT side

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'The First Meetup',
//     image:
//       'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244',
//     address: 'Chicago',
//     description: 'This is a second meetup'
//   },
//   {
//     id: 'm2',
//     title: 'The Second Meetup',
//     image:
//       'https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171',
//     address: 'NY',
//     description: 'This is a second meetup'
//   },
//   {
//     id: 'm3',
//     title: 'The Third Meetup',
//     image:
//       'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=390',
//     address: 'Toronto',
//     description: 'This is a third meetup'
//   }
// ]

function HomePage (props) {
  return (
    <Fragment>
      <Head>
        <title>Events for Developers</title>
        <meta name='description' content='Browse events for developers' />
      </Head>
      <MeetupList meetups={props.meetups}></MeetupList>
    </Fragment>
  )
}

// This code is not going to be at the CLIENT-SIDE
// your credentials will not be exposed
// this code is executed when the page is pre-generated
export async function getStaticProps () {
  // run on the build process
  // fetch data from an API
  // this will run on the server
  // we don't need to fetch data from our own API
  // just make the connection to the DB--> 'Meetups'
  const client = await MongoClient.connect(
    'mongodb+srv://kavajaga:Events2022@cluster0.zvp9ap3.mongodb.net/Meetups?retryWrites=true&w=majority'
  )
  // create the db to get hold of the db
  // if the db is not created, it'll be created on the fly --> /Meetups
  const db = client.db()
  // connect to the collection -> meetups
  const meetupsCollection = db.collection('meetups')
  // insert document, which is an object with -> title, image...
  // result will be the object which is an async operation,
  // it's an async task returning a promise
  // Get finally an Array of documents
  const result = await meetupsCollection.find().toArray()
  console.log('result', result)

  // close the connection
  client.close()

  return {
    // Always return an 'object'
    // define the "props" property, the name has to be 'props'
    // this 'props' receive the props that the function of this component receive -> function HomePage (props)
    // in this case, HomePage (props)
    props: {
      //meetups: DUMMY_MEETUPS
      meetups: result.map(item => {
        return {
          title: item.title,
          address: item.address,
          image: item.image,
          // _id is an object an we need to transform it to --> string
          id: item._id.toString() // convert the object _id from the MongoDB -> to string
        }
      })
    },

    //   props: {
    //     //meetups: DUMMY_MEETUPS
    //     meetups: result.map(item =>  ({
    //        title: item.title,
    //        address: item.address,
    //        image: item.image,
    //        id: item._id.toString(), // convert the object _id from the MongoDB -> to string

    //      }))
    //    },
    //   // feature: incremental static generation
    revalidate: 10
  }
}

// export async function getServerSideProps(context) {
//   // this will run on the server after deployment
//   // this doesn't run on the build process
//   const req = context.req;
//   const res = context.res;

//   console.log({req})
//   console.log({res})
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export default HomePage
