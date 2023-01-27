interface Props {
  title: string;
  subtitle: string;
  tags: string;
  date: string;
}
const OGCard = ({ title, subtitle, tags, date }: Props) => {
  const splitTags =
    tags.length > 0 ? tags.replaceAll(' ', '').split(',') : null;

  return (
    <div
      tw="flex h-[630px] w-[1200px] items-center justify-center"
      style={{
        background: 'linear-gradient(133deg, #3578f6 0%, #3578f6 100%)'
      }}
    >
      <div
        tw="flex absolute h-[630px] w-[1200px]"
        style={{
          background: 'url(https://grainy-gradients.vercel.app/noise.svg)'
        }}
      ></div>
      <div tw="relative flex h-[590px] w-[1160px] flex-col bg-white p-14 py-20">
        <div tw="grow flex">
          <img
            src="https://github.com/mebiusbox.png"
            width={200}
            height={200}
            alt="logo"
            tw="h-28 w-28 rounded-full"
          />
          <div tw="flex">
            <h2
              tw={`mt-8 text-3xl tracking-wide text-[#292F36]`}
              style={{ fontFamily: 'NotoSansJP' }}
            >
              mebiusbox
            </h2>
          </div>
        </div>
        <h1
          tw={`mb-20 w-[1060px] text-5xl font-bold tracking-wide text-[#292F36]`}
          style={{ lineHeight: '1.2em', fontFamily: 'NotoSansJP' }}
        >
          {title}
        </h1>
        <h2
          tw={`mb-4 text-3xl tracking-wide text-[#292F36]`}
          style={{ fontFamily: 'NotoSansJP' }}
        >
          {subtitle}
        </h2>
        <div
          tw={`flex text-lg tracking-wide text-[#292F36]`}
          style={{ fontFamily: 'NotoSansJP' }}
        >
          <span>{date}</span>
          {splitTags && splitTags.length > 0 && (
            <>
              <span tw="ml-2">·</span>
              <ul>
                {splitTags.map((tag) => (
                  <li key={tag} tw="ml-2">
                    #{tag.toLowerCase()}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div tw="absolute bottom-10 right-10 flex justify-end">
          <img
            src="https://mebiusbox.github.io/img/logo.svg"
            width={40}
            height={40}
            alt="logo"
          />
          <span
            tw={`ml-4 mt-1 text-lg tracking-wide text-[#292F36]`}
            style={{ fontFamily: 'NotoSansJP' }}
          >
            Docusaurus
          </span>
        </div>
      </div>
    </div>
  );
};

export default OGCard;
