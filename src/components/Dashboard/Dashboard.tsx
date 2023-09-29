import React from 'react'
import { styled } from 'styled-components';
import Field from './Field';
import Badge, { BadgeColor } from 'components/Badge';

interface DashboardProps {
  status: "loading" | "error" | "success";
  isLoading: boolean;
  isFetching: boolean;
  isStale: boolean;
}

const Dashboard = ({
  status,
  isLoading,
  isFetching,
  isStale
}: DashboardProps) => {
  return (
    <Container>
      <Title>Dashboard</Title>
      <Field
        label="status"
        value={
          <Badge color={statusColorMap[status]}>
            {status}
          </Badge>}
      />
      <Field
        label="isLoading"
        value={
          <Badge color={isLoading ? 'info' : 'default'}>
            {isLoading ? "true" : "false"}
          </Badge>
        }
      />
      <Field
        label="isFetching"
        value={
          <Badge color={isFetching ? 'info' : 'default'}>
            {isFetching ? "true" : "false"}
          </Badge>
        }
      />
      <Field
        label="isStale"
        value={
          <Badge color={isStale ? 'warning' : 'default'}>
            {isStale ? "true" : "false"}
          </Badge>
        }
      />
    </Container >
  )
}

const statusColorMap: { [key in string]: BadgeColor } = {
  loading: 'info',
  success: 'success',
  error: 'error',
}

const Container = styled.div`
  padding: 16px;
  border: 1px solid rgb(226 232 240);
  border-radius: 8px;
`

const Title = styled.div`
  color: rgb(17 24 39);
  font-size: 18px;
  font-weight: 600;
`

export default Dashboard