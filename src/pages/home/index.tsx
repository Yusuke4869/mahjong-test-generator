import {
  Button,
  Center,
  Container,
  Grid,
  Group,
  MultiSelect,
  NumberInput,
  SegmentedControl,
  TextInput,
  Title,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import type { FC } from "react";
import { useEffect, useState } from "react";
import Hai from "~/components/hai";
import { YAKU_LIST } from "~/data/yaku";

interface Test {
  hai: {
    hai: string[];
    furo: { type: string; hai: string[] }[];
  };
  agariHai: string;
  bakaze: string;
  jikaze: string;
  tsumo: boolean;
  doraHyo?: string[];
  reach?: boolean;
  uradoraHyo?: string[];
  ippatsu?: boolean;
  chankan?: boolean;
  rinshan?: boolean;
  haitei?: boolean;
  hotei?: boolean;
  doubleReach?: boolean;
  tenho?: boolean;
  chiho?: boolean;
  oya?: boolean;
  honba?: number;
  rempuhai?: 2 | 4;
  kazoeYakuman?: boolean;
  doubleYakuman?: boolean;
  kiriageMangan?: boolean;
  sanma?: boolean;
}

const Home: FC = () => {
  const [haiList, setHaiList] = useState<string[]>([]);
  const [furoList, setFuroList] = useState<string[]>([]);
  const [furoTestList, setFuroTestList] = useState<{ type: string; hai: string[] }[]>([]);
  const [doraHyo, setDoraHyo] = useState<string[]>([]);
  const [uradoraHyo, setUradoraHyo] = useState<string[]>([]);
  const [bakaze, setBakaze] = useState<string>("1z");
  const [jikaze, setJikaze] = useState<string>("1z");
  const [tsumo, setTsumo] = useState<boolean>(true);
  const [reach, setReach] = useState<boolean>(false);
  const [ippatsu, setIppatsu] = useState<boolean>(false);
  const [chankan, setChankan] = useState<boolean>(false);
  const [rinshan, setRinshan] = useState<boolean>(false);
  const [haitei, setHaitei] = useState<boolean>(false);
  const [hotei, setHotei] = useState<boolean>(false);
  const [doubleReach, setDoubleReach] = useState<boolean>(false);
  const [tenho, setTenho] = useState<boolean>(false);
  const [chiho, setChiho] = useState<boolean>(false);
  const [oya, setOya] = useState<boolean>(false);
  const [rempuhai, setRempuhai] = useState<2 | 4>(2);
  const [kazoeYakuman, setKazoeYakuman] = useState<boolean>(true);
  const [doubleYakuman, setDoubleYakuman] = useState<boolean>(true);
  const [kiriageMangan, setKiriageMangan] = useState<boolean>(false);
  const [sanma, setSanma] = useState<boolean>(false);
  const [testName, setTestName] = useState<string>("");
  const [test, setTest] = useState<Test>();
  const [yaku, setYaku] = useState<string[]>([]);
  const [fu, setFu] = useState<number>(20);
  const [han, setHan] = useState<number>(1);
  const [yakuman, setYakuman] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setFuroTestList([]);
    const tmp: { type: string; hai: string[] }[] = [];

    for (const furo of furoList) {
      const l = furo.split("_");

      if (furo.startsWith("chi")) {
        const t = l[1].slice(-1);
        const numList = l[1].split(t);
        const f = {
          type: "chi",
          hai: [
            `${parseInt(numList[0], 10)}${t}`,
            `${parseInt(numList[1], 10)}${t}`,
            `${parseInt(numList[2], 10)}${t}`,
          ],
        };
        tmp.push(f);
      } else {
        const hai = l[1];
        const h = parseInt(hai, 10) === 0 ? `5${hai.slice(-1)}` : hai;
        const f = {
          type: l[0],
          hai: new Array<string>(furo.startsWith("pon") ? 3 : 4).fill(h),
        };
        if (parseInt(hai, 10) === 0) f.hai[0] = hai;
        tmp.push(f);
      }
    }

    setFuroTestList(tmp);
  }, [furoList]);

  useEffect(() => {
    const t: Test = {
      hai: {
        hai: haiList,
        furo: furoTestList,
      },
      agariHai: haiList.slice(-1)[0] ?? "",
      bakaze,
      jikaze,
      tsumo,
    };

    if (doraHyo.length > 0) t.doraHyo = doraHyo;
    if (reach) t.reach = reach;
    if (uradoraHyo.length > 0) t.uradoraHyo = uradoraHyo;
    if (ippatsu) t.ippatsu = ippatsu;
    if (chankan) t.chankan = chankan;
    if (rinshan) t.rinshan = rinshan;
    if (haitei) t.haitei = haitei;
    if (hotei) t.hotei = hotei;
    if (doubleReach) t.doubleReach = doubleReach;
    if (tenho) t.tenho = tenho;
    if (chiho) t.chiho = chiho;
    if (oya) t.oya = oya;
    if (rempuhai === 4) t.rempuhai = rempuhai;
    if (!kazoeYakuman) t.kazoeYakuman = kazoeYakuman;
    if (!doubleYakuman) t.doubleYakuman = doubleYakuman;
    if (kiriageMangan) t.kiriageMangan = kiriageMangan;
    if (sanma) t.sanma = sanma;

    setTest(t);
  }, [
    haiList,
    furoTestList,
    bakaze,
    jikaze,
    tsumo,
    doraHyo,
    reach,
    uradoraHyo,
    ippatsu,
    chankan,
    rinshan,
    haitei,
    hotei,
    doubleReach,
    tenho,
    chiho,
    oya,
    rempuhai,
    kazoeYakuman,
    doubleYakuman,
    kiriageMangan,
    sanma,
  ]);

  return (
    <Container size="md" mt="xl">
      <Title order={1}>
        <Center>Generate mahjong test</Center>
      </Title>
      <Hai
        haiList={haiList}
        setHaiList={setHaiList}
        furoList={furoList}
        setFuroList={setFuroList}
        doraHyo={doraHyo}
        setDoraHyo={setDoraHyo}
        uradoraHyo={uradoraHyo}
        setUradoraHyo={setUradoraHyo}
      />
      <Container size="sm" mt="xl">
        <Group my="md">
          <SegmentedControl
            data={[
              { label: "東場", value: "1z" },
              { label: "南場", value: "2z" },
              { label: "西場", value: "3z" },
              { label: "北場", value: "4z" },
            ]}
            value={bakaze}
            onChange={setBakaze}
          />
          <SegmentedControl
            data={[
              { label: "東家", value: "1z" },
              { label: "南家", value: "2z" },
              { label: "西家", value: "3z" },
              { label: "北家", value: "4z" },
            ]}
            value={jikaze}
            onChange={setJikaze}
          />
          <SegmentedControl
            data={[
              { label: "ツモ", value: "tsumo" },
              { label: "ロン", value: "ron" },
            ]}
            value={tsumo ? "tsumo" : "ron"}
            onChange={(v) => setTsumo(v === "tsumo")}
          />
          <SegmentedControl
            data={[
              { label: "子", value: "ko" },
              { label: "親", value: "oya" },
            ]}
            value={oya ? "oya" : "ko"}
            onChange={(v) => setOya(v === "oya")}
          />
        </Group>
        <Group my="md">
          <Button
            variant={reach ? "filled" : "light"}
            color="cyan"
            disabled={doubleReach}
            onClick={() => setReach(!reach)}
          >
            リーチ
          </Button>
          <Button variant={ippatsu ? "filled" : "light"} color="cyan" onClick={() => setIppatsu(!ippatsu)}>
            一発
          </Button>
          <Button
            variant={chankan ? "filled" : "light"}
            color="cyan"
            disabled={tsumo}
            onClick={() => setChankan(!chankan)}
          >
            槍槓
          </Button>
          <Button
            variant={rinshan ? "filled" : "light"}
            color="cyan"
            disabled={!tsumo}
            onClick={() => setRinshan(!rinshan)}
          >
            嶺上開花
          </Button>
          <Button
            variant={haitei ? "filled" : "light"}
            color="cyan"
            disabled={!tsumo}
            onClick={() => setHaitei(!haitei)}
          >
            海底摸月
          </Button>
          <Button variant={hotei ? "filled" : "light"} color="cyan" disabled={tsumo} onClick={() => setHotei(!hotei)}>
            河底撈魚
          </Button>
          <Button
            variant={doubleReach ? "filled" : "light"}
            color="cyan"
            disabled={reach}
            onClick={() => setDoubleReach(!doubleReach)}
          >
            ダブルリーチ
          </Button>
          <Button variant={tenho ? "filled" : "light"} color="cyan" disabled={!tsumo} onClick={() => setTenho(!tenho)}>
            天和
          </Button>
          <Button variant={chiho ? "filled" : "light"} color="cyan" disabled={!tsumo} onClick={() => setChiho(!chiho)}>
            地和
          </Button>
        </Group>
        <Group my="md">
          <SegmentedControl
            data={[
              { label: "四麻", value: "yonma" },
              { label: "三麻", value: "sanma" },
            ]}
            value={sanma ? "sanma" : "yonma"}
            onChange={(v) => setSanma(v === "sanma")}
          />
          <SegmentedControl
            data={[
              { label: "連風牌対子2符", value: "2" },
              { label: "連風牌対子4符", value: "4" },
            ]}
            value={rempuhai === 4 ? "4" : "2"}
            onChange={(v) => setRempuhai(v === "4" ? 4 : 2)}
          />
        </Group>
        <Group>
          <Button
            variant={kazoeYakuman ? "filled" : "light"}
            color="violet"
            onClick={() => setKazoeYakuman(!kazoeYakuman)}
          >
            数え役満
          </Button>
          <Button
            variant={doubleYakuman ? "filled" : "light"}
            color="violet"
            onClick={() => setDoubleYakuman(!doubleYakuman)}
          >
            ダブル役満
          </Button>
          <Button
            variant={kiriageMangan ? "filled" : "light"}
            color="violet"
            onClick={() => setKiriageMangan(!kiriageMangan)}
          >
            切り上げ満貫
          </Button>
        </Group>
      </Container>
      <Container size="sm" my="md">
        <TextInput label="名称" value={testName} onChange={(event) => setTestName(event.currentTarget.value)} />
        <Grid columns={6}>
          <Grid.Col span={1}>
            <NumberInput label="符" min={20} step={5} value={fu} onChange={(v) => (v === "" ? setFu(20) : setFu(v))} />
          </Grid.Col>
          <Grid.Col span={1}>
            <NumberInput label="翻" min={1} value={han} onChange={(v) => (v === "" ? setHan(1) : setHan(v))} />
          </Grid.Col>
          <Grid.Col span={1}>
            <NumberInput
              label="役満"
              min={0}
              value={yakuman}
              onChange={(v) => (v === "" ? setYakuman(0) : setYakuman(v))}
            />
          </Grid.Col>
          <Grid.Col span={3}>
            <NumberInput
              label="点数"
              placeholder="この手牌の点数を入力"
              value={score}
              onChange={(v) => (v === "" ? setScore(0) : setScore(v))}
              hideControls
            />
          </Grid.Col>
        </Grid>
        <MultiSelect
          label="役"
          placeholder="この和了の役を選択"
          data={YAKU_LIST}
          value={yaku}
          onChange={setYaku}
          clearButtonProps={{ "aria-label": "Clear selection" }}
          clearable
          searchable
        />
      </Container>
      <Container size="sm" my="xl">
        <Prism language="typescript">{`
test("${testName}", () => {
  const result = getYaku(${JSON.stringify(test, null, 2)});
  expect(result.yaku.map((v) => v.name)).toEqual(${JSON.stringify(
    yaku.sort((a, b) => YAKU_LIST.indexOf(a) - YAKU_LIST.indexOf(b)),
  )});
  expect(result.fu).toBe(${yakuman > 0 ? 0 : fu});
  expect(result.han).toBe(${yakuman > 0 ? 0 : han});
  expect(result.yakuman).toBe(${yakuman});
  expect(result.rawScore).toBe(${score});
});
      `}</Prism>
      </Container>
    </Container>
  );
};

export { Home };
