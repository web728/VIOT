import Image from "next/image";

export function MiningMedia() {
  return (
    <figure className="mine-media">
      <Image
        className="mine-media-poster"
        src="/media/viot-mining-operations.webp"
        alt="Connected haul trucks operating across an open-pit mine at blue hour"
        fill
        sizes="(max-width: 980px) calc(100vw - 48px), 56vw"
      />
      <video
        className="mine-media-film"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/viot-mining-operations.webp"
        aria-hidden="true"
      >
        <source src="/media/viot-mining-operations.mp4" type="video/mp4" />
      </video>
      <div className="mine-media-shade" aria-hidden="true" />
      <div className="mine-media-label mine-media-label-top" aria-hidden="true">
        <span /> Field conditions / connected fleet
      </div>
      <div className="mine-media-label mine-media-label-bottom" aria-hidden="true">
        Live data path · multi-vehicle visibility
      </div>
      <figcaption className="sr-only">
        VIoT connects field vehicles to a shared operational view across demanding mining conditions.
      </figcaption>
    </figure>
  );
}
