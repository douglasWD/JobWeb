import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/jobs/$jobid')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/jobs/$jobid"!</div>
}
