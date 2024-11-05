// Outputs: /builtwith.json

export async function GET({ params, request }: { params: any; request: any }) {
  return new Response(
    JSON.stringify({
      msg: 'Hello World!',
      app: 'Projects-imartin.dav',
      repository: 'https://github.com/iMartinDav/projects.imartin.dev',
      version: '1.0.0',
      endpoints: [
        '/api/v1/hello.json',
        '/api/v1/fetchNowFeed.json',
        '/api/v1/fetchProjectsFeed.json'
      ],
      status: 200
    })
  );
}
