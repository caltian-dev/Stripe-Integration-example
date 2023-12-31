import { AlertTriangle } from 'react-feather'
import styled from 'styled-components'

import List from 'src/components/List'
import Product from 'src/components/Product'
import Spinner from 'src/components/Spinner'

export const QUERY = gql`
  query StripeItems($params: StripeItemsParamsInput) {
    stripeItems(params: $params) {
      id
      name
      description
      images
      price
      type
    }
  }
`

export const Loading = () => (
  <Wrapper>
    <Background>
      <Spinner />
    </Background>
    <Background>
      <Spinner />
    </Background>
    <Background>
      <Spinner />
    </Background>
  </Wrapper>
)

export const Empty = () => <div>Empty</div>

export const Failure = () => {
  return (
    <Wrapper>
      <Background>
        <AlertTriangle />
      </Background>
      <Background>
        <AlertTriangle />
      </Background>
      <Background>
        <AlertTriangle />
      </Background>
    </Wrapper>
  )
}

export const Success = ({ stripeItems }) => {
  return <List items={stripeItems} Component={Product} />
}

// Styles

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: var(--padding);

  height: var(--size-13);
`

const Background = styled.div`
  width: 100%;
  height: 100%;

  background-color: var(--gray-1);
  border-radius: var(--radius-2);

  display: grid;
  place-content: center;
`
