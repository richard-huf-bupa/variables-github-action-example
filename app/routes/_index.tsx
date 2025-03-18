// import { Form } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'
import {
  // RdsButton,
  // RdsBox,
  RdsHeading,
  // RdsSpacer,
  // RdsTextField,
  // RdsUnorderedList,
  // RdsListItem,
} from '@bupa/rds.components'
// import { styled } from '@bupa/rds.theme'
// import * as tokens from '../data/tokens.js'

// export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

// export default function Page() {
//   return (
//     <div>
//       <h1>Some Page</h1>
//       <img src={banner} />
//     </div>
//   );
// }

// const ResultsPane = styled(RdsBox)(({ theme }) => ({
//   padding: theme.rds.spacing(200),
//   border: `1px solid ${theme.rds.palette.neutral.border.strong}`,
// }))

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

export default function Index() {
  // const filterTokensView = (tokens, query) =>
  //   tokens.filter((token) => {
  //     return token.includes(query);
  //   });

  // const tokens = [
  //   {
  //     value: "#FF0000",
  //     description: "Warning colour",
  //     name: "palette/red/100",
  //   },
  //   {
  //     value: "#00FF00",
  //     description: "Positive colour",
  //     name: "palette/green/100",
  //   },
  // ];

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <RdsHeading>Tokens</RdsHeading>
          dfgdfg hey sdfdsfdfs sdfdsf
        </header>
      </div>
    </div>
  )
}
