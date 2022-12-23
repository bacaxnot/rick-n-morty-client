import CardAttributes from '@components/CardAttributes'
import CardFooter from '@components/CardFooter'
import CardHeader from '@components/CardHeader'
import CardListSection from '@components/CardListSection'
import { charactersListFormatter } from '@utils/formatters'
import { useParams } from 'react-router-dom'
import { useFetchEpisode } from '@hooks/useFetchEpisode'
import '@styles/EpisodeView.sass'

const EpisodeView = () => {
    const { id } = useParams()
    const episode = useFetchEpisode(+id!)
    const attributesArr = Object.entries(episode.attributes)
    return (
        <main className="episode-view">
            <div className="episode-card-expanded">
                <CardHeader title={`episode ${episode.id}`} />
                <div className="episode-info">
                    <CardAttributes
                        title="information"
                        attributes={attributesArr}
                    />
                    <CardListSection
                        title="Characters"
                        elements={charactersListFormatter(episode.characters)}
                    />
                </div>
                <CardFooter text="" />
            </div>
        </main>
    )
}

export default EpisodeView
