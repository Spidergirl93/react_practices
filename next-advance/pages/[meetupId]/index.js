import { useRouter } from "next/router";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const DUMMY_DATA = [
  {
    id: "1",
    title: "Good Place",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some street",
    description: "This place is amazing! You have to visit here some time",
  },
  {
    id: "2",
    title: "Better Place",
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80",
    address: "Neverland",
    description: "This place is amazing! You have to visit here some time",
  },
  {
    id: "3",
    title: "Best Place",
    image:
      "https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    address: "Mordor",
    description: "This place is amazing! You have to visit here some time",
  },
  {
    id: "4",
    title: "Awesome Place",
    image:
      "https://images.unsplash.com/photo-1562832135-14a35d25edef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80",
    address: "Doesn't exist!",
    description: "This place is amazing! You have to visit here some time",
  },
];

const MeetupDetailPage = () => {
  const router = useRouter();

  const meetupId = router.query.meetupId;

  const item = DUMMY_DATA.find((meetUp) => {
    return meetUp.id === meetupId;
  });

  return (
    <MeetupDetail
      id={item.id}
      title={item.title}
      address={item.address}
      image={item.image}
      description={item.description}
    />
  );
};

export const getStaticProps = async (context) => {

  const meetupId = context.params.meetupId;

  return {
    props: {
      id: meetupId,
      title: "Good Place",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
      address: "Some street",
      description: "This place is amazing! You have to visit here some time",
    },
  };
};

export default MeetupDetailPage;