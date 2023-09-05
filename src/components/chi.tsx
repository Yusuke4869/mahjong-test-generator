import { Grid, Image } from "@mantine/core";
import type { FC } from "react";

const Chi: FC<{ addFuro: (name: string, ...hai: string[]) => void }> = ({ addFuro }) => (
  <Grid columns={5}>
    <Grid.Col span={1}>
      <Image src="/chi_1m2m3m.png" alt="chi_1m2m3m" onClick={() => addFuro("chi_1m2m3m", "1m", "2m", "3m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_2m3m4m.png" alt="chi_2m3m4m" onClick={() => addFuro("chi_2m3m4m", "2m", "3m", "4m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_3m4m5m.png" alt="chi_3m4m5m" onClick={() => addFuro("chi_3m4m5m", "3m", "4m", "5m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_4m5m6m.png" alt="chi_4m5m6m" onClick={() => addFuro("chi_4m5m6m", "4m", "5m", "6m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_5m6m7m.png" alt="chi_5m6m7m" onClick={() => addFuro("chi_5m6m7m", "5m", "6m", "7m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_6m7m8m.png" alt="chi_6m7m8m" onClick={() => addFuro("chi_6m7m8m", "6m", "7m", "8m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_7m8m9m.png" alt="chi_7m8m9m" onClick={() => addFuro("chi_7m8m9m", "7m", "8m", "9m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_3m4m0m.png" alt="chi_3m4m0m" onClick={() => addFuro("chi_3m4m0m", "3m", "4m", "0m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_4m0m6m.png" alt="chi_4m0m6m" onClick={() => addFuro("chi_4m0m6m", "4m", "0m", "6m")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_0m6m7m.png" alt="chi_0m6m7m" onClick={() => addFuro("chi_0m6m7m", "0m", "6m", "7m")} />
    </Grid.Col>

    <Grid.Col span={1}>
      <Image src="/chi_1p2p3p.png" alt="chi_1p2p3p" onClick={() => addFuro("chi_1p2p3p", "1p", "2p", "3p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_2p3p4p.png" alt="chi_2p3p4p" onClick={() => addFuro("chi_2p3p4p", "2p", "3p", "4p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_3p4p5p.png" alt="chi_3p4p5p" onClick={() => addFuro("chi_3p4p5p", "3p", "4p", "5p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_4p5p6p.png" alt="chi_4p5p6p" onClick={() => addFuro("chi_4p5p6p", "4p", "5p", "6p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_5p6p7p.png" alt="chi_5p6p7p" onClick={() => addFuro("chi_5p6p7p", "5p", "6p", "7p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_6p7p8p.png" alt="chi_6p7p8p" onClick={() => addFuro("chi_6p7p8p", "6p", "7p", "8p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_7p8p9p.png" alt="chi_7p8p9p" onClick={() => addFuro("chi_7p8p9p", "7p", "8p", "9p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_3p4p0p.png" alt="chi_3p4p0p" onClick={() => addFuro("chi_3p4p0p", "3p", "4p", "0p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_4p0p6p.png" alt="chi_4p0p6p" onClick={() => addFuro("chi_4p0p6p", "4p", "0p", "6p")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_0p6p7p.png" alt="chi_0p6p7p" onClick={() => addFuro("chi_0p6p7p", "0p", "6p", "7p")} />
    </Grid.Col>

    <Grid.Col span={1}>
      <Image src="/chi_1s2s3s.png" alt="chi_1s2s3s" onClick={() => addFuro("chi_1s2s3s", "1s", "2s", "3s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_2s3s4s.png" alt="chi_2s3s4s" onClick={() => addFuro("chi_2s3s4s", "2s", "3s", "4s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_3s4s5s.png" alt="chi_3s4s5s" onClick={() => addFuro("chi_3s4s5s", "3s", "4s", "5s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_4s5s6s.png" alt="chi_4s5s6s" onClick={() => addFuro("chi_4s5s6s", "4s", "5s", "6s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_5s6s7s.png" alt="chi_5s6s7s" onClick={() => addFuro("chi_5s6s7s", "5s", "6s", "7s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_6s7s8s.png" alt="chi_6s7s8s" onClick={() => addFuro("chi_6s7s8s", "6s", "7s", "8s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_7s8s9s.png" alt="chi_7s8s9s" onClick={() => addFuro("chi_7s8s9s", "7s", "8s", "9s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_3s4s0s.png" alt="chi_3s4s0s" onClick={() => addFuro("chi_3s4s0s", "3s", "4s", "0s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_4s0s6s.png" alt="chi_4s0s6s" onClick={() => addFuro("chi_4s0s6s", "4s", "0s", "6s")} />
    </Grid.Col>
    <Grid.Col span={1}>
      <Image src="/chi_0s6s7s.png" alt="chi_0s6s7s" onClick={() => addFuro("chi_0s6s7s", "0s", "6s", "7s")} />
    </Grid.Col>
  </Grid>
);

export default Chi;
