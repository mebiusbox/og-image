import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import OGCard from '../../components/ogCard';

export const config = {
  runtime: 'edge'
};

const font = fetch(
  new URL('../../assets/NotoSansJP-Bold-Subset.otf', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const fontData = await font;
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') ?? ""
  const subtitle = searchParams.get('subtitle') ?? ""
  const date = searchParams.get('date') ?? "";
  const tags = searchParams.get('tags') ?? "";
  return new ImageResponse(
    (
      <OGCard
        title={title}
        subtitle={subtitle}
        date={date}
        tags={tags}
      />
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'NotoSansJP',
          data: fontData,
          style: 'normal'
        }
      ]
    }
  );
}
