import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jobs/new')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jobs/new"!</div>
}
