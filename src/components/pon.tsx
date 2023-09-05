import { Grid, Image } from "@mantine/core";
import type { FC } from "react";

const Pon: FC<{ addFuro: (name: string, ...hai: string[]) => void }> = ({ addFuro }) => (
  <Grid columns={5}>
    <Grid.Col span={1}>
      <Image src="/pon_1m.png" alt="pon_1m" onClick={() => addFuro("pon_1m", "1m", "1m", "1m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_2m.png" alt="pon_2m" onClick={() => addFuro("pon_2m", "2m", "2m", "2m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_3m.png" alt="pon_3m" onClick={() => addFuro("pon_3m", "3m", "3m", "3m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_4m.png" alt="pon_4m" onClick={() => addFuro("pon_4m", "4m", "4m", "4m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_5m.png" alt="pon_5m" onClick={() => addFuro("pon_5m", "5m", "5m", "5m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_6m.png" alt="pon_6m" onClick={() => addFuro("pon_6m", "6m", "6m", "6m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_7m.png" alt="pon_7m" onClick={() => addFuro("pon_7m", "7m", "7m", "7m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_8m.png" alt="pon_8m" onClick={() => addFuro("pon_8m", "8m", "8m", "8m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_9m.png" alt="pon_9m" onClick={() => addFuro("pon_9m", "9m", "9m", "9m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_0m.png" alt="pon_0m" onClick={() => addFuro("pon_0m", "0m", "5m", "5m")} />
    </Grid.Col>

    <Grid.Col span={1}>
      <Image src="/pon_1p.png" alt="pon_1p" onClick={() => addFuro("pon_1p", "1p", "1p", "1p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_2p.png" alt="pon_2p" onClick={() => addFuro("pon_2p", "2p", "2p", "2p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_3p.png" alt="pon_3p" onClick={() => addFuro("pon_3p", "3p", "3p", "3p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_4p.png" alt="pon_4p" onClick={() => addFuro("pon_4p", "4p", "4p", "4p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_5p.png" alt="pon_5p" onClick={() => addFuro("pon_5p", "5p", "5p", "5p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_6p.png" alt="pon_6p" onClick={() => addFuro("pon_6p", "6p", "6p", "6p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_7p.png" alt="pon_7p" onClick={() => addFuro("pon_7p", "7p", "7p", "7p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_8p.png" alt="pon_8p" onClick={() => addFuro("pon_8p", "8p", "8p", "8p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_9p.png" alt="pon_9p" onClick={() => addFuro("pon_9p", "9p", "9p", "9p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_0p.png" alt="pon_0p" onClick={() => addFuro("pon_0p", "0p", "5p", "5p")} />
    </Grid.Col>

    <Grid.Col span={1}>
      <Image src="/pon_1s.png" alt="pon_1s" onClick={() => addFuro("pon_1s", "1s", "1s", "1s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_2s.png" alt="pon_2s" onClick={() => addFuro("pon_2s", "2s", "2s", "2s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_3s.png" alt="pon_3s" onClick={() => addFuro("pon_3s", "3s", "3s", "3s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_4s.png" alt="pon_4s" onClick={() => addFuro("pon_4s", "4s", "4s", "4s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_5s.png" alt="pon_5s" onClick={() => addFuro("pon_5s", "5s", "5s", "5s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_6s.png" alt="pon_6s" onClick={() => addFuro("pon_6s", "6s", "6s", "6s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_7s.png" alt="pon_7s" onClick={() => addFuro("pon_7s", "7s", "7s", "7s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_8s.png" alt="pon_8s" onClick={() => addFuro("pon_8s", "8s", "8s", "8s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_9s.png" alt="pon_9s" onClick={() => addFuro("pon_9s", "9s", "9s", "9s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_0s.png" alt="pon_0s" onClick={() => addFuro("pon_0s", "0s", "5s", "5s")} />
    </Grid.Col>

    <Grid.Col span={1}>
      <Image src="/pon_1z.png" alt="pon_1z" onClick={() => addFuro("pon_1z", "1z", "1z", "1z")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_2z.png" alt="pon_2z" onClick={() => addFuro("pon_2z", "2z", "2z", "2z")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_3z.png" alt="pon_3z" onClick={() => addFuro("pon_3z", "3z", "3z", "3z")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_4z.png" alt="pon_4z" onClick={() => addFuro("pon_4z", "4z", "4z", "4z")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_5z.png" alt="pon_5z" onClick={() => addFuro("pon_5z", "5z", "5z", "5z")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_6z.png" alt="pon_6z" onClick={() => addFuro("pon_6z", "6z", "6z", "6z")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/pon_7z.png" alt="pon_7z" onClick={() => addFuro("pon_7z", "7z", "7z", "7z")} />
    </Grid.Col>
  </Grid>
);

export default Pon;
