import './Persian.css'

function Persian() {
  return (
    <div className="persian-page">
      <div className="container">
        <div className="grid-two">
          <div className="card">
            <h2 className="card-title">
              Past Tense Endings <span className="persian-inline">شناسه‌های گذشته</span>
            </h2>
            <p className="card-desc">
              Added to the <strong>past stem</strong>. Ex:{' '}
              <span className="persian-inline">رفتن</span> (raftan) → Past Stem:{' '}
              <span className="persian-inline">رفت</span> (raft)
            </p>
            <table className="verb-table">
              <thead>
                <tr>
                  <th>Pronoun</th>
                  <th>Ending (W/S)</th>
                  <th>Written</th>
                  <th>Spoken</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="persian-inline">من</span> (man)
                  </td>
                  <td>
                    <span className="ending">ـَم</span> (-am)
                  </td>
                  <td>
                    <span className="persian-inline">رفتم</span> (raftam)
                  </td>
                  <td>
                    <span className="persian-inline">رفتم</span> (raftam)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">تو</span> (to)
                  </td>
                  <td>
                    <span className="ending">ـی</span> (-i)
                  </td>
                  <td>
                    <span className="persian-inline">رفتی</span> (rafti)
                  </td>
                  <td>
                    <span className="persian-inline">رفتی</span> (rafti)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">او</span> (u)
                  </td>
                  <td>
                    <span className="ending">—</span>
                  </td>
                  <td>
                    <span className="persian-inline">رفت</span> (raft)
                  </td>
                  <td>
                    <span className="persian-inline">رفت</span> (raft)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">ما</span> (mā)
                  </td>
                  <td>
                    <span className="ending">ـیم</span> (-im)
                  </td>
                  <td>
                    <span className="persian-inline">رفتیم</span> (raftim)
                  </td>
                  <td>
                    <span className="persian-inline">رفتیم</span> (raftim)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">شما</span> (shomā)
                  </td>
                  <td>
                    <span className="ending">ـید / ـین</span> (-id / -in)
                  </td>
                  <td>
                    <span className="persian-inline">رفتید</span> (raftid)
                  </td>
                  <td>
                    <span className="persian-inline">رفتین</span> (raftin)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">آنها</span> (ānhā)
                  </td>
                  <td>
                    <span className="ending">ـَند / ـَن</span> (-and / -an)
                  </td>
                  <td>
                    <span className="persian-inline">رفتند</span> (raftand)
                  </td>
                  <td>
                    <span className="persian-inline">رفتن</span> (raftan)
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              <strong>Note:</strong> The third-person singular (او) in the simple past tense is
              unique because it has no ending; it's just the past stem.
            </p>
          </div>

          <div className="card">
            <h2 className="card-title">
              Present Tense Endings <span className="persian-inline">شناسه‌های حال</span>
            </h2>
            <p className="card-desc">
              Added to the <strong>present stem</strong> with prefix{' '}
              <span className="persian-inline">میـ</span> (mi-). Ex:{' '}
              <span className="persian-inline">رفتن</span> (raftan) → Present Stem:{' '}
              <span className="persian-inline">رو</span> (rav-)
            </p>
            <table className="verb-table">
              <thead>
                <tr>
                  <th>Pronoun</th>
                  <th>Ending (W/S)</th>
                  <th>Written</th>
                  <th>Spoken</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="persian-inline">من</span> (man)
                  </td>
                  <td>
                    <span className="ending">ـَم</span> (-am)
                  </td>
                  <td>
                    <span className="persian-inline">می‌روم</span> (miravam)
                  </td>
                  <td>
                    <span className="persian-inline">میرم</span> (miram)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">تو</span> (to)
                  </td>
                  <td>
                    <span className="ending">ـی</span> (-i)
                  </td>
                  <td>
                    <span className="persian-inline">می‌روی</span> (miravi)
                  </td>
                  <td>
                    <span className="persian-inline">میری</span> (miri)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">او</span> (u)
                  </td>
                  <td>
                    <span className="ending">ـَد / ـه</span> (-ad / -e)
                  </td>
                  <td>
                    <span className="persian-inline">می‌رود</span> (miravad)
                  </td>
                  <td>
                    <span className="persian-inline">میره</span> (mire)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">ما</span> (mā)
                  </td>
                  <td>
                    <span className="ending">ـیم</span> (-im)
                  </td>
                  <td>
                    <span className="persian-inline">می‌رویم</span> (miravim)
                  </td>
                  <td>
                    <span className="persian-inline">میریم</span> (mirim)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">شما</span> (shomā)
                  </td>
                  <td>
                    <span className="ending">ـید / ـین</span> (-id / -in)
                  </td>
                  <td>
                    <span className="persian-inline">می‌روید</span> (miravid)
                  </td>
                  <td>
                    <span className="persian-inline">میرین</span> (mirin)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">آنها</span> (ānhā)
                  </td>
                  <td>
                    <span className="ending">ـَند / ـَن</span> (-and / -an)
                  </td>
                  <td>
                    <span className="persian-inline">می‌روند</span> (miravand)
                  </td>
                  <td>
                    <span className="persian-inline">میرن</span> (miran)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid-two">
          <div className="card">
            <h3 className="card-title-small">
              The Verb "to be" <span className="persian-inline">هستن</span> (hastan)
            </h3>
            <p className="card-desc">
              Verb endings attach directly to nouns, pronouns, or adjectives as suffixes.
            </p>
            <table className="verb-table">
              <thead>
                <tr>
                  <th>Full Form</th>
                  <th>Contraction</th>
                  <th>Example (Full)</th>
                  <th>Example (Contracted)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="persian-inline">هستم</span> (hastam)
                  </td>
                  <td>
                    <span className="ending">ـَم</span> (-am)
                  </td>
                  <td>
                    <span className="persian-inline">من خوب هستم</span>
                  </td>
                  <td>
                    <span className="persian-inline">خوبم</span> (khubam)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">هستی</span> (hasti)
                  </td>
                  <td>
                    <span className="ending">ـی</span> (-i)
                  </td>
                  <td>
                    <span className="persian-inline">تو خوب هستی</span>
                  </td>
                  <td>
                    <span className="persian-inline">خوبی</span> (khubi)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">هست</span> (hast)
                  </td>
                  <td>
                    <span className="ending">ـه / ـست</span> (-e/-st)
                  </td>
                  <td>
                    <span className="persian-inline">او خوب هست</span>
                  </td>
                  <td>
                    <span className="persian-inline">خوبه</span> (khube)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">هستیم</span> (hastim)
                  </td>
                  <td>
                    <span className="ending">ـیم</span> (-im)
                  </td>
                  <td>
                    <span className="persian-inline">ما خوب هستیم</span>
                  </td>
                  <td>
                    <span className="persian-inline">خوبیم</span> (khubim)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">هستید</span> (hastid)
                  </td>
                  <td>
                    <span className="ending">ـید</span> (-id)
                  </td>
                  <td>
                    <span className="persian-inline">شما خوب هستید</span>
                  </td>
                  <td>
                    <span className="persian-inline">خوبید</span> (khubid)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">هستند</span> (hastand)
                  </td>
                  <td>
                    <span className="ending">ـَن / ـَند</span> (-an/-and)
                  </td>
                  <td>
                    <span className="persian-inline">آنها خوب هستند</span>
                  </td>
                  <td>
                    <span className="persian-inline">خوبن / خوبند</span> (khuban / khuband)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3 className="card-title-small">
              The "is" Contraction <span className="persian-inline">است</span> (ast)
            </h3>
            <p className="card-desc">Common contraction rules in speech and informal writing:</p>

            <div className="rule-box">
              <strong>1. After consonant:</strong> <span className="persian-inline">است</span>{' '}
              <span className="arrow">→</span> <span className="ending">ـه</span> (-e)
              <div className="example-text">
                <span className="persian-inline">این کتاب است</span>{' '}
                <span className="arrow">→</span> <span className="persian-inline">این کتابه</span>{' '}
                (in ketābe) <em>"This is a book"</em>
              </div>
            </div>

            <div className="rule-box">
              <strong>2. After vowel (ا or و):</strong> <span className="persian-inline">است</span>{' '}
              <span className="arrow">→</span> <span className="ending">ـست</span> (-st)
              <div className="example-text">
                <span className="persian-inline">اینجا است</span> <span className="arrow">→</span>{' '}
                <span className="persian-inline">اینجاست</span> (injāst) <em>"It is here"</em>
              </div>
            </div>

            <div className="rule-box">
              <strong>3. After vowel ه (-e):</strong> <span className="persian-inline">است</span>{' '}
              <span className="arrow">→</span> <span className="ending">ـست</span> (-st)
              <div className="example-text">
                <span className="persian-inline">این خانه است</span>{' '}
                <span className="arrow">→</span> <span className="persian-inline">این خانه‌ست</span>{' '}
                (in khānast) <em>"This is a house"</em>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-two">
          <div className="card">
            <h3 className="card-title-small">
              Possessive Suffixes <span className="persian-inline">صفات ملکی</span>
            </h3>
            <p className="card-desc">
              Added directly to nouns. Ex: <span className="persian-inline">خانه</span> (khāne) - "house"
            </p>
            <table className="verb-table">
              <thead>
                <tr>
                  <th>Pronoun</th>
                  <th>Suffix</th>
                  <th>Example</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="persian-inline">من</span> (man)
                  </td>
                  <td>
                    <span className="ending">ـَم</span> (-am)
                  </td>
                  <td>
                    <span className="persian-inline">خانه‌ام</span> (khāneam)
                  </td>
                  <td>my house</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">تو</span> (to)
                  </td>
                  <td>
                    <span className="ending">ـَت</span> (-at)
                  </td>
                  <td>
                    <span className="persian-inline">خانه‌ات</span> (khāneat)
                  </td>
                  <td>your house</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">او</span> (u)
                  </td>
                  <td>
                    <span className="ending">ـَش</span> (-ash)
                  </td>
                  <td>
                    <span className="persian-inline">خانه‌اش</span> (khāneash)
                  </td>
                  <td>his/her house</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">ما</span> (mā)
                  </td>
                  <td>
                    <span className="ending">ـَمان</span> (-emān)
                  </td>
                  <td>
                    <span className="persian-inline">خانه‌مان</span> (khānemān)
                  </td>
                  <td>our house</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">شما</span> (shomā)
                  </td>
                  <td>
                    <span className="ending">ـَتان</span> (-etān)
                  </td>
                  <td>
                    <span className="persian-inline">خانه‌تان</span> (khānetān)
                  </td>
                  <td>your house</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">آنها</span> (ānhā)
                  </td>
                  <td>
                    <span className="ending">ـَشان</span> (-eshān)
                  </td>
                  <td>
                    <span className="persian-inline">خانه‌شان</span> (khāneshān)
                  </td>
                  <td>their house</td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              <strong>Note:</strong> After consonants, these suffixes connect directly. After vowels, use
              <span className="persian-inline"> ی </span> as a connector (e.g.,
              <span className="persian-inline">کتابم</span> vs <span className="persian-inline">بابایم</span>).
            </p>
          </div>

          <div className="card">
            <h3 className="card-title-small">
              Object Pronouns <span className="persian-inline">ضمایر مفعولی</span>
            </h3>
            <p className="card-desc">
              Used with <span className="persian-inline">را</span> (rā) or attached to verbs for "me", "you", etc.
            </p>
            <table className="verb-table">
              <thead>
                <tr>
                  <th>Pronoun</th>
                  <th>With را</th>
                  <th>Suffix</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="persian-inline">من</span> (man)
                  </td>
                  <td>
                    <span className="persian-inline">مرا</span> (marā)
                  </td>
                  <td>
                    <span className="ending">ـَم</span> (-am)
                  </td>
                  <td>
                    <span className="persian-inline">دیدم</span> (didam) - "saw me"
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">تو</span> (to)
                  </td>
                  <td>
                    <span className="persian-inline">ترا</span> (torā)
                  </td>
                  <td>
                    <span className="ending">ـَت</span> (-at)
                  </td>
                  <td>
                    <span className="persian-inline">دیدت</span> (didat) - "saw you"
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">او</span> (u)
                  </td>
                  <td>
                    <span className="persian-inline">او را</span> (u rā)
                  </td>
                  <td>
                    <span className="ending">ـَش</span> (-ash)
                  </td>
                  <td>
                    <span className="persian-inline">دیدش</span> (didash) - "saw him/her"
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">ما</span> (mā)
                  </td>
                  <td>
                    <span className="persian-inline">ما را</span> (mā rā)
                  </td>
                  <td>
                    <span className="ending">ـَمان</span> (-emān)
                  </td>
                  <td>
                    <span className="persian-inline">دیدمان</span> (didemān) - "saw us"
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">شما</span> (shomā)
                  </td>
                  <td>
                    <span className="persian-inline">شما را</span> (shomā rā)
                  </td>
                  <td>
                    <span className="ending">ـَتان</span> (-etān)
                  </td>
                  <td>
                    <span className="persian-inline">دیدتان</span> (didetān) - "saw you"
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">آنها</span> (ānhā)
                  </td>
                  <td>
                    <span className="persian-inline">آنها را</span> (ānhā rā)
                  </td>
                  <td>
                    <span className="ending">ـَشان</span> (-eshān)
                  </td>
                  <td>
                    <span className="persian-inline">دیدشان</span> (dideshān) - "saw them"
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="note">
              <strong>Note:</strong> In spoken Persian, <span className="persian-inline">را</span> (rā) is
              often shortened to <span className="persian-inline">رو</span> (ro).
            </p>
          </div>
        </div>

        <div className="grid-two">
          <div className="card">
            <h3 className="card-title-small">
              Subjunctive/Imperative <span className="persian-inline">التزامی/امری</span>
            </h3>
            <p className="card-desc">
              Uses prefix <span className="persian-inline">بـ</span> (be-) with the{' '}
              <strong>present stem</strong>. Used for commands, wishes, and after certain verbs. Ex:{' '}
              <span className="persian-inline">رفتن</span> (raftan) → Present Stem:{' '}
              <span className="persian-inline">رو</span> (rav-)
            </p>
            <table className="verb-table">
              <thead>
                <tr>
                  <th>Pronoun</th>
                  <th>Ending (W/S)</th>
                  <th>Written</th>
                  <th>Spoken</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="persian-inline">من</span> (man)
                  </td>
                  <td>
                    <span className="ending">ـَم</span> (-am)
                  </td>
                  <td>
                    <span className="persian-inline">بروم</span> (beravam)
                  </td>
                  <td>
                    <span className="persian-inline">برم</span> (beram)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">تو</span> (to)
                  </td>
                  <td>
                    <span className="ending">ـی</span> (-i)
                  </td>
                  <td>
                    <span className="persian-inline">بروی</span> (beravi)
                  </td>
                  <td>
                    <span className="persian-inline">بری</span> (beri)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">او</span> (u)
                  </td>
                  <td>
                    <span className="ending">ـَد / ـه</span> (-ad / -e)
                  </td>
                  <td>
                    <span className="persian-inline">برود</span> (beravad)
                  </td>
                  <td>
                    <span className="persian-inline">بره</span> (bere)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">ما</span> (mā)
                  </td>
                  <td>
                    <span className="ending">ـیم</span> (-im)
                  </td>
                  <td>
                    <span className="persian-inline">برویم</span> (beravim)
                  </td>
                  <td>
                    <span className="persian-inline">بریم</span> (berim)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">شما</span> (shomā)
                  </td>
                  <td>
                    <span className="ending">ـید / ـین</span> (-id / -in)
                  </td>
                  <td>
                    <span className="persian-inline">بروید</span> (beravid)
                  </td>
                  <td>
                    <span className="persian-inline">برین</span> (berin)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">آنها</span> (ānhā)
                  </td>
                  <td>
                    <span className="ending">ـَند / ـَن</span> (-and / -an)
                  </td>
                  <td>
                    <span className="persian-inline">بروند</span> (beravand)
                  </td>
                  <td>
                    <span className="persian-inline">برن</span> (beran)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3 className="card-title-small">
              Negative Prefix <span className="persian-inline">نـ</span>
            </h3>
            <p className="card-desc">
              To make verbs negative, add <span className="persian-inline">نـ</span> (na-) before
              past tense or <span className="persian-inline">نـ</span> (ne-) before{' '}
              <span className="persian-inline">می</span> in present.
            </p>

            <div className="rule-box">
              <strong>Present Negative:</strong> <span className="persian-inline">نـ</span> (ne-) +{' '}
              <span className="persian-inline">می</span> (mi-)
              <div className="example-text">
                <span className="persian-inline">می‌روم</span> (miravam){' '}
                <span className="arrow">→</span> <span className="persian-inline">نمی‌روم</span>{' '}
                (nemiravam) <em>"I don't go"</em>
              </div>
            </div>

            <div className="rule-box">
              <strong>Past Negative:</strong> <span className="persian-inline">نـ</span> (na-) +
              past stem
              <div className="example-text">
                <span className="persian-inline">رفتم</span> (raftam){' '}
                <span className="arrow">→</span> <span className="persian-inline">نرفتم</span>{' '}
                (naraftam) <em>"I didn't go"</em>
              </div>
            </div>

            <div className="rule-box">
              <strong>Subjunctive Negative:</strong> <span className="persian-inline">نـ</span>{' '}
              (na-) + <span className="persian-inline">بـ</span> (be-)
              <div className="example-text">
                <span className="persian-inline">بروم</span> (beravam){' '}
                <span className="arrow">→</span> <span className="persian-inline">نروم</span>{' '}
                (naravam) <em>"I don't go/shouldn't go"</em>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-two">
          <div className="card">
            <h3 className="card-title-small">
              Future Tense <span className="persian-inline">آینده</span>
            </h3>
            <p className="card-desc">
              Formed with <span className="persian-inline">خواستن</span> (khastan) conjugated +
              infinitive. Ex: <span className="persian-inline">خواهم رفت</span> (khaham raft) - "I
              will go". In spoken Persian, the present tense is typically used for future instead.
            </p>
            <table className="verb-table">
              <thead>
                <tr>
                  <th>Pronoun</th>
                  <th>خواستن (W)</th>
                  <th>Written</th>
                  <th>Spoken</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="persian-inline">من</span> (man)
                  </td>
                  <td>
                    <span className="ending">خواهم</span> (khaham)
                  </td>
                  <td>
                    <span className="persian-inline">خواهم رفت</span> (khaham raft)
                  </td>
                  <td>
                    <span className="persian-inline">میرم</span> (miram)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">تو</span> (to)
                  </td>
                  <td>
                    <span className="ending">خواهی</span> (khahi)
                  </td>
                  <td>
                    <span className="persian-inline">خواهی رفت</span> (khahi raft)
                  </td>
                  <td>
                    <span className="persian-inline">میری</span> (miri)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">او</span> (u)
                  </td>
                  <td>
                    <span className="ending">خواهد</span> (khahad)
                  </td>
                  <td>
                    <span className="persian-inline">خواهد رفت</span> (khahad raft)
                  </td>
                  <td>
                    <span className="persian-inline">میره</span> (mire)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">ما</span> (mā)
                  </td>
                  <td>
                    <span className="ending">خواهیم</span> (khahim)
                  </td>
                  <td>
                    <span className="persian-inline">خواهیم رفت</span> (khahim raft)
                  </td>
                  <td>
                    <span className="persian-inline">میریم</span> (mirim)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">شما</span> (shomā)
                  </td>
                  <td>
                    <span className="ending">خواهید</span> (khahid)
                  </td>
                  <td>
                    <span className="persian-inline">خواهید رفت</span> (khahid raft)
                  </td>
                  <td>
                    <span className="persian-inline">میرین</span> (mirin)
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">آنها</span> (ānhā)
                  </td>
                  <td>
                    <span className="ending">خواهند</span> (khahand)
                  </td>
                  <td>
                    <span className="persian-inline">خواهند رفت</span> (khahand raft)
                  </td>
                  <td>
                    <span className="persian-inline">میرن</span> (miran)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="card">
            <h3 className="card-title-small">Common Conjunctions & Discourse Markers</h3>
            <p className="card-desc">Essential connecting words for natural conversation.</p>
            <table className="verb-table">
              <thead>
                <tr>
                  <th>Persian</th>
                  <th>Transliteration</th>
                  <th>Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="persian-inline">و</span>
                  </td>
                  <td>va / o</td>
                  <td>and</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">یا</span>
                  </td>
                  <td>yā</td>
                  <td>or</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">اما</span>
                  </td>
                  <td>ammā</td>
                  <td>but</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">ولی</span>
                  </td>
                  <td>vali</td>
                  <td>but, however</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">هنوز</span>
                  </td>
                  <td>hanuz</td>
                  <td>still, yet</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">شاید</span>
                  </td>
                  <td>shāyad</td>
                  <td>maybe, perhaps</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">البته</span>
                  </td>
                  <td>albatte</td>
                  <td>of course</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">پس</span>
                  </td>
                  <td>pas</td>
                  <td>so, then</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">چون</span>
                  </td>
                  <td>chon</td>
                  <td>because</td>
                </tr>
                <tr>
                  <td>
                    <span className="persian-inline">اگر</span>
                  </td>
                  <td>agar</td>
                  <td>if</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Persian
