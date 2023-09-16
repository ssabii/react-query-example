import React from 'react'
import { styled } from 'styled-components';
import Field from './Field';
import Badge, { BadgeColor } from 'components/Badge';

interface DashboardProps {
  status: "loading" | "error" | "success";
  isLoading: boolean;
  fetchStatus: "fetching" | "paused" | "idle";
  isFetching: boolean;
}

const Dashboard = ({
  status,
  isLoading,
  fetchStatus,
  isFetching
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
        label="fetchStatus"
        value={
          <Badge color={fetchStatusColorMap[fetchStatus]}>
            {fetchStatus}
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
    </Container >
  )
}

const statusColorMap: { [key in string]: BadgeColor } = {
  loading: 'info',
  success: 'success',
  error: 'error',
}

const fetchStatusColorMap: { [key in string]: BadgeColor } = {
  fetching: 'info',
  paused: 'primary',
  idle: 'default',
}

const Container = styled.div`
  padding: 16px;
  border: 1px solid rgb(226 232 240);
  border-radius: 8px;
`

const Title = styled.div`
  color: rgb(17 24 39);
  font-weight: 600;
`

export default Dashboard