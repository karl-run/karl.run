import Boio from '../posts/getting-up-and-running-with-testing-react/index.md'
import Boio2 from '../posts/spring-boot-schema-first-graphql/index.md'

export default function Home() {
  return <main className=""><Boio components={{
    wrapper: ({ children, ...rest }) => {
      console.log(rest);
      return <div>heh,{children}</div>;
    },
  }} /></main>;
}
