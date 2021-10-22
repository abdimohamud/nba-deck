import router, { useRouter } from "next/router";

export default function TeamPage(team) {
    console.log(team)
  const router = useRouter();
  return <div>Team #{router.query.abv}</div>;
}

TeamPage.getInitialProps = async (ctx) => {
    // console.log(ctx)
    const res = await fetch('https://nba-deck-be.herokuapp.com/api/themes')
    const json = await res.json()
    let team = json.data.filter(item=>item.key==ctx.query.abv)[0]
    const teamInfo = await fetch()
  }