//pages>new-meetup>index.js
import Head from 'next/head'
import { Fragment } from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'
import { useRouter } from 'next/router'

function NewMeetupPage () {
  // create router object
  const router = useRouter()

  async function addMeetupHandler (enteredMeetupData) {
    // sent the request to the folder 'api' and name of the file --> new-meetup
    // we're sending the object from the form to the DB
    const response = await fetch('/api/new-meetup', {
      //
      method: 'POST',
      // convert into JSON with the JSON.stringify method
      // enteredMeetupData --> the object send by the form -> {title: '', image:''}
      body: JSON.stringify(enteredMeetupData),
      headers: {
        // headers to make clear we're sending JSON data to the API
        'Content-Type': 'application/json' // this means we're sending JSON
      }
    })
    // then after the fetch we'll have the data from the response
    // from the fetch I will have the data from the response.
    const data = await response.json()
    alert('hello')
    console.log(data)
    // To send the user to the root of the app
    router.push('/')
  }

  // child-> NewMeetupForm is the child component
  // parent -> 'NewMeetupPage' page
  // The child: when the submit button is clicked, the event will send the 'object' with
  // all the information of the form to the 'onAddMeetup' function,
  // and this will triggered in the parent -> addMeetupHandler, that receives the object passed by the child

  return (
    <Fragment>
      <Head>
        <title>Events for Developers</title>
        <meta
          name='description'
          content='Add events for developers'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </Fragment>
  )
}
export default NewMeetupPage
