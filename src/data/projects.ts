export type Project = {
  title: string;
  status: string;
  summary: string;
  tech?: string[];
};

export const projects: Project[] = [
  {
    title: 'Interactive installations at İzmir heritage sites',
    status: 'In progress',
    summary:
      'Interactive digital installations for cultural heritage sites in İzmir, developed in and around Flowlab as it is being established.',
  },
  {
    title: 'Interactive table',
    status: 'In development',
    summary:
      'A 2 m × 1 m table that locates small tagged cubes placed on its surface and sends their positions to interactive applications on the local network.',
    tech: ['AprilTag (tag36h11)', 'Raspberry Pi 5', 'Python', 'Node.js', 'WebSocket'],
  },
  {
    title: 'Kinect hand tracking',
    status: 'In development',
    summary:
      'Hand detection from a Kinect v1 depth camera, mounted at ground level or on the ceiling, streamed to the browser through a WebSocket bridge.',
    tech: ['Kinect v1', 'libfreenect', 'Python', 'JavaScript'],
  },
];
