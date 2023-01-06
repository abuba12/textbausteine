import styles from './page.module.css'

export default function Home() {

  const text = `Guter Allgemein- und normalgewichtiger Ernährungszustand.
Körpergröße: 180 cm. Körpergewicht: 80 kg. BMI: 24,7.
Herzaktion rhythmisch. Herztöne: rein. Keine Herzgeräusche
Lunge: vesikuläres Atemgeräusch. Sonorer Klopfschall.
Abdomen: Abdomen weich, gut eindrückbar, kein Druckschmerz, lebhafte Darmgeräusche über allen vier Quadranten, keine tastbaren Resistenzen. Leber und Milz nicht vergrößert palpabel.
Nierenlager nicht klopfschmerzhaft.
Wirbelsäule in der Längsachse gerade. Wirbelsäule nicht klopfschmerzhaft.
Lymphknoten cervikal, nuchal, axillär und inguinal beidseits nicht vergrößert tastbar.
Mundschleimhaut feucht und gut durchblutet. Rachenschleimhaut unauffällig.
Schilddrüse: nicht vergrößert palpabel.
Fußpulse bds. sicher tastbar.
Unterschenkel bds.: keine Thrombosezeichen. Keine Ödeme.`;

  const text_neuro = `Orientierende neurologische Untersuchung:
Zu allen Qualitäten voll orientiert. Kein Meningismus.
Beidseits kein Druckschmerz über den trigeminalen Austrittspunkten. Pupillen isokor, mittelweit. Direkte und indirekte Lichtreaktion prompt und seitengleich. Keine Augenmuskelparesen.
Keine Dysarthrie. Keine Dysphagie. Keine Aphasie.
Finger-Nase-Versuch bds. metrisch. Eudiadochokinese.
Berührungssensibilität allseits intakt.
Beidseits kein Tremor.
Keine Hinweise auf ein fokal neurologisches Defizit.`

  return (
    <main className={styles.main}>
      <textarea defaultValue={text} rows={12} />
      <textarea defaultValue={text_neuro} rows={8}/>
    </main>
  )
}
