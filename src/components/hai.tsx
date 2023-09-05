import { Center, Container, Grid, Image, Tabs, Text } from "@mantine/core";
import type { Dispatch, FC, SetStateAction } from "react";
import { useEffect, useState } from "react";

import Ankan from "./ankan";
import Chi from "./chi";
import Daiminkan from "./daiminkan";
import Kakan from "./kakan";
import NormalHai from "./normalHai";
import Pon from "./pon";

const Hai: FC<{
  haiList: string[];
  setHaiList: Dispatch<SetStateAction<string[]>>;
  furoList: string[];
  setFuroList: Dispatch<SetStateAction<string[]>>;
  doraHyo: string[];
  setDoraHyo: Dispatch<SetStateAction<string[]>>;
  uradoraHyo: string[];
  setUradoraHyo: Dispatch<SetStateAction<string[]>>;
}> = ({ haiList, setHaiList, furoList, setFuroList, doraHyo, setDoraHyo, uradoraHyo, setUradoraHyo }) => {
  // 副露も含めた牌リスト
  const [allHaiList, setAllHaiList] = useState<string[]>([]);
  // 面子カウント
  const [mentsuCount, setMentsuCount] = useState<number>(0);

  useEffect(() => {
    setMentsuCount(Math.floor(haiList.length / 3) + furoList.length);
  }, [haiList, furoList]);

  const addHai = (hai: string) => {
    if (haiList.length >= 14 - furoList.length * 3) return;
    const num = parseInt(hai, 10);
    if (num === 0 && allHaiList.includes(hai)) return;

    if (num === 0 || num === 5) {
      const t = hai.slice(-1);
      const r = allHaiList.filter((h) => h === `0${t}` || h === `5${t}`);
      if (r.length >= 4) return;
    } else {
      const r = allHaiList.filter((h) => h === hai);
      if (r.length >= 4) return;
    }

    setAllHaiList([...allHaiList, hai]);
    setHaiList([...haiList, hai]);
  };

  const addFuro = (name: string, ...addHaiList: string[]) => {
    if (furoList.length === 4) return;
    if (mentsuCount === 4) return;
    if (!name.startsWith("chi") && furoList.includes(name)) return;

    for (const hai of addHaiList) {
      const num = parseInt(hai, 10);
      if (num === 0 && allHaiList.includes(hai)) return;

      const t = hai.slice(-1);
      if (name.startsWith("chi")) {
        if (num === 0 || num === 5) {
          const r = allHaiList.filter((h) => h === `0${t}` || h === `5${t}`);
          if (r.length >= 4) return;
        } else {
          const r = allHaiList.filter((h) => h === hai);
          if (r.length >= 4) return;
        }
      } else if (name.startsWith("pon")) {
        if (num === 0 || num === 5) {
          const r = allHaiList.filter((h) => h === `0${t}` || h === `5${t}`);
          if (r.length >= 2) return;
        } else {
          const r = allHaiList.filter((h) => h === hai);
          if (r.length >= 2) return;
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (num === 0 || num === 5) {
          const r = allHaiList.filter((h) => h === `0${t}` || h === `5${t}`);
          if (r.length >= 1) return;
        } else {
          const r = allHaiList.filter((h) => h === hai);
          if (r.length >= 1) return;
        }
      }
    }

    setAllHaiList([...allHaiList, ...addHaiList]);
    setFuroList([name, ...furoList]);
  };

  const addDora = (hai: string) => {
    if (doraHyo.length >= 5) return;
    const num = parseInt(hai, 10);
    if (num === 0 && allHaiList.includes(hai)) return;

    if (num === 0 || num === 5) {
      const t = hai.slice(-1);
      const r = allHaiList.filter((h) => h === `0${t}` || h === `5${t}`);
      if (r.length >= 4) return;
    } else {
      const r = allHaiList.filter((h) => h === hai);
      if (r.length >= 4) return;
    }

    setAllHaiList([...allHaiList, hai]);
    setDoraHyo([...doraHyo, hai]);
  };

  const addUradora = (hai: string) => {
    if (uradoraHyo.length >= 5) return;
    const num = parseInt(hai, 10);
    if (num === 0 && allHaiList.includes(hai)) return;

    if (num === 0 || num === 5) {
      const t = hai.slice(-1);
      const r = allHaiList.filter((h) => h === `0${t}` || h === `5${t}`);
      if (r.length >= 4) return;
    } else {
      const r = allHaiList.filter((h) => h === hai);
      if (r.length >= 4) return;
    }

    setAllHaiList([...allHaiList, hai]);
    setUradoraHyo([...uradoraHyo, hai]);
  };

  const removeHai = (hai: string, index: number) => {
    const i = allHaiList.indexOf(hai);
    allHaiList.splice(i, 1);
    setAllHaiList([...allHaiList]);

    if (haiList[index] === hai) haiList.splice(index, 1);
    else {
      const j = haiList.indexOf(hai);
      haiList.splice(j, 1);
    }
    setHaiList([...haiList]);
  };

  const removeFuro = (name: string, index: number) => {
    const l = name.split("_");
    if (name.startsWith("chi")) {
      const t = l[1].slice(-1);
      const numList = l[1].split(t);
      const removeHaiList = [
        `${parseInt(numList[0], 10)}${t}`,
        `${parseInt(numList[1], 10)}${t}`,
        `${parseInt(numList[2], 10)}${t}`,
      ];
      for (const hai of removeHaiList) {
        const i = allHaiList.indexOf(hai);
        allHaiList.splice(i, 1);
      }
    } else {
      const hai = l[1];
      const h = parseInt(hai, 10) === 0 ? `5${hai.slice(-1)}` : hai;
      for (let i = 0; i < (name.startsWith("pon") ? 3 : 4); i += 1) {
        const j = allHaiList.indexOf(i === 0 ? hai : h);
        allHaiList.splice(j, 1);
      }
    }

    setAllHaiList([...allHaiList]);

    if (furoList[index] === name) furoList.splice(index, 1);
    else {
      const j = furoList.indexOf(name);
      furoList.splice(j, 1);
    }
    setFuroList([...furoList]);
  };

  const removeDora = (hai: string, index: number) => {
    const i = allHaiList.indexOf(hai);
    allHaiList.splice(i, 1);
    setAllHaiList([...allHaiList]);

    if (doraHyo[index] === hai) doraHyo.splice(index, 1);
    else {
      const j = doraHyo.indexOf(hai);
      doraHyo.splice(j, 1);
    }
    setDoraHyo([...doraHyo]);
  };

  const removeUradora = (hai: string, index: number) => {
    const i = allHaiList.indexOf(hai);
    allHaiList.splice(i, 1);
    setAllHaiList([...allHaiList]);

    if (uradoraHyo[index] === hai) uradoraHyo.splice(index, 1);
    else {
      const j = uradoraHyo.indexOf(hai);
      uradoraHyo.splice(j, 1);
    }
    setUradoraHyo([...uradoraHyo]);
  };

  return (
    <>
      <Container size="sm" mt="2rem" mb="1rem" h="17rem" bg="#038803">
        <Grid columns={14} gutter="xs" align="flex-end">
          <Grid.Col span={7}>
            <Text fz="xs" color="white">
              ドラ表示牌
            </Text>
          </Grid.Col>
          <Grid.Col span={7}>
            <Text fz="xs" color="white">
              裏ドラ表示牌
            </Text>
          </Grid.Col>
          {doraHyo.map((hai, index) => {
            const i = index;
            return (
              <Grid.Col span={1} key={`${hai}-${i}`}>
                <Image src={`/${hai}.png`} alt={hai} onClick={() => removeDora(hai, index)} />
              </Grid.Col>
            );
          })}
          {new Array(5 - doraHyo.length).fill(null).map(() => (
            <Grid.Col span={1} key={Math.random()}>
              <Image src="/ura.png" alt="ura" />{" "}
            </Grid.Col>
          ))}
          {new Array(2).fill(null).map((v) => (
            <Grid.Col span={1} key={Math.random()}>
              {v}
            </Grid.Col>
          ))}
          {uradoraHyo.map((hai, index) => {
            const i = index;
            return (
              <Grid.Col span={1} key={`${hai}-${i}`}>
                <Image src={`/${hai}.png`} alt={hai} onClick={() => removeUradora(hai, index)} />
              </Grid.Col>
            );
          })}
          {new Array(5 - uradoraHyo.length).fill(null).map(() => (
            <Grid.Col span={1} key={Math.random()}>
              <Image src="/ura.png" alt="ura" />{" "}
            </Grid.Col>
          ))}
          {new Array(2).fill(null).map((v) => (
            <Grid.Col span={1} key={Math.random()}>
              {v}
            </Grid.Col>
          ))}
          {new Array(13 - furoList.length * 3).fill(null).map((v) => (
            <Grid.Col span={1} key={Math.random()}>
              {v}
            </Grid.Col>
          ))}
          <Grid.Col span={1}>
            <Center>
              <Text fz="xs" color="white">
                和了牌
              </Text>
            </Center>
          </Grid.Col>
        </Grid>
        <Grid columns={14} gutter="xs" h="4rem">
          {haiList.map((hai, index) => {
            const i = index;
            return (
              <Grid.Col span={1} key={`${hai}-${i}`}>
                <Image src={`/${hai}.png`} alt={hai} onClick={() => removeHai(hai, index)} />
              </Grid.Col>
            );
          })}
        </Grid>
        <Grid columns={5} justify="flex-end" align="flex-end" h="5.5rem">
          {furoList.map((furo, index) => {
            const i = index;
            return (
              <Grid.Col span={1} key={`${furo}-${i}`}>
                <Image src={`/${furo}.png`} alt={furo} onClick={() => removeFuro(furo, index)} />
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
      <Container size="sm" my="1rem">
        <Tabs color="grape" defaultValue="normal">
          <Tabs.List>
            <Tabs.Tab value="normal">通常牌</Tabs.Tab>
            <Tabs.Tab value="chi">チー</Tabs.Tab>
            <Tabs.Tab value="pon">ポン</Tabs.Tab>
            <Tabs.Tab value="ankan">暗槓</Tabs.Tab>
            <Tabs.Tab value="daiminkan">大明槓</Tabs.Tab>
            <Tabs.Tab value="kakan">加槓</Tabs.Tab>
            <Tabs.Tab value="dora">ドラ表示牌</Tabs.Tab>
            <Tabs.Tab value="uradora">裏ドラ表示牌</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="normal" pt="xs">
            <NormalHai addHai={addHai} />
          </Tabs.Panel>
          <Tabs.Panel value="chi" pt="xs">
            <Chi addFuro={addFuro} />
          </Tabs.Panel>
          <Tabs.Panel value="pon" pt="xs">
            <Pon addFuro={addFuro} />
          </Tabs.Panel>
          <Tabs.Panel value="ankan" pt="xs">
            <Ankan addFuro={addFuro} />
          </Tabs.Panel>
          <Tabs.Panel value="daiminkan" pt="xs">
            <Daiminkan addFuro={addFuro} />
          </Tabs.Panel>
          <Tabs.Panel value="kakan" pt="xs">
            <Kakan addFuro={addFuro} />
          </Tabs.Panel>
          <Tabs.Panel value="dora" pt="xs">
            <NormalHai addHai={addDora} />
          </Tabs.Panel>
          <Tabs.Panel value="uradora" pt="xs">
            <NormalHai addHai={addUradora} />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </>
  );
};

export default Hai;
