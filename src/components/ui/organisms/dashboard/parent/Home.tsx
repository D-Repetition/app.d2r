"use client";

import Wrapper from '../Wrapper'
import DashboardTopbar from '../DashboardTopbar'
import { useState } from 'react';
import Button from '@/components/ui/atomes/Button';
import { Arrow, Book, ChevronDown, Hour, Planning } from '@/components/assets/icons';
import { repeat } from '@/utils/repeat';
import DashboardSubjectDataTable from '../DashboardSubjectDataTable';
import { subjectTableData } from '@/constants/dashboardData';

const Home = () => {
    const [kid, setKit] = useState("Koffi D")
    const activityBar = 45;

    return (
        <Wrapper>
            <DashboardTopbar pageTitile='Tableau de bord' />
            <div className="w-full h-full flex flex-col items-center justify-start gap-3 overflow-x-hidden overflow-y-scroll scrollbar">
                <div className="w-full shrink-0 relative overflow-hidden p-4 flex flex-col items-start justify-center rounded-lg bg-white gap-2">
                    <h1 className="font-inter text-[20px] leading-[20px] text-board-black">Bonjour monsieur Martin,</h1>
                    <p className="font-inter text-[12px] leading-[20px] text-board-black/60 leading-[16px]">Heureux de vous revoir, vous trouverez ci dessous, les informations relatives au suivi de vos enfants.</p>
                    <div className="absolute right-0 top-0 bottom-0 flex items-center justify-end">
                        <img src="/images/dashboard/home.png" className='shrink-0 w-auto h-full object-contain' alt="Dashboard home" />
                    </div>
                </div>
                <div className="w-full shrink-0 p-4 gap-4 rounded-lg flex flex-col bg-white">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center justify-start gap-2">
                            <div className="bg-board-black/10 rounded h-8 w-8"></div>
                            <div className="text-board-black/60">Voici un aperçu de la situation scolaire de <span className="text-board-black/80">{kid}.</span></div>
                        </div>
                        <Button className='border-2 border-board-black bg-board-black/5 hover:bg-board-black/10 h-9.5!'>Suivant <Arrow className='fill-board-black' /></Button>
                    </div>
                    <div className="p-2 w-full shrink-0 grid grid-cols-4 gap-2 rounded-[16px] bg-board-black/5 min-h-15">
                        <div className="bg-board-black/5 text-board-black/50 rounded-[8px] px-4 py-2 flex items-center justify-start">2 cours prévus cette semaine</div>
                        <div className="bg-board-black/5 text-board-black/50 rounded-[8px] px-4 py-2 flex items-center justify-start">1 validation en attente</div>
                        <div className="bg-board-black/5 text-board-black/50 rounded-[8px] px-4 py-2 flex items-center justify-start">1 nouveau rapport pédagogique</div>
                        <div className="bg-board-black/5 text-board-black/50 rounded-[8px] px-4 py-2 flex items-center justify-start">Prochaine séance : Mercredi 16h00</div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-[3fr_1fr] gap-3">
                    <div className="bg-white w-full flex flex-col justify-start items-start gap-3 p-4 rounded-[8px]">
                        <div className="text-board-black/80">Mes enfants</div>
                        <div className="w-full p-2 flex flex-col gap-3 rounded-[20px] bg-board-black/5 flex-1">
                            <div className="flex items-center justify-between w-full p-1 rounded bg-white">
                                <div className="flex items-center justify-start gap-2">
                                    <div className="bg-board-black/10 rounded h-8 w-8"></div>
                                    <div className="text-board-black/60 flex flex-col items-start justify-center">
                                        <div className="text-board-black/90 text-[14px] leading-[16px]">Koffi D.</div>
                                        <div className="text-[14px]] leading-[14px]">3ème • Collège Protestant • Accompagnement actif</div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end gap-2">
                                    <Button className='border-2 border-board-black/50 bg-board-black/5 hover:bg-board-black/10 h-5! px-3!'><ChevronDown className='fill-board-black/50 rotate-90' /></Button>
                                    <Button className='border-2 border-board-black bg-board-black/5 hover:bg-board-black/10 h-5! px-3!'><ChevronDown className='fill-board-black -rotate-90' /></Button>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-4 gap-3 h-full">
                                <div className="p-4 rounded-[12px] rounded-[12px] bg-board-black/5 gap-3 flex flex-col">
                                    <div className="text-board-black/80">Enseignant attribué</div>
                                    <div className="text-board-black/40 flex flex-col items-start justify-start gap-2 text-[15px]">
                                        <div className="">M. Akakpo</div>
                                        <div className="">Depuis le <span className="text-board-black/50">12 janvier 2026</span></div>
                                        <ul className='list-disc pl-6 gap-2 flex flex-col'>
                                            <li>Mathématiques </li>
                                            <li>Physique-Chimie</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-4 rounded-[12px] rounded-[12px] bg-board-black/5 gap-3 flex flex-col">
                                    <div className="text-board-black/80">Matières suivies</div>
                                    <div className="text-board-black/40 flex flex-col items-start justify-start gap-2 text-[15px]">
                                        <ul className='list-disc pl-6 gap-2 flex flex-col'>
                                            <li>Mathématiques </li>
                                            <li>Physique-Chimie</li>
                                            <li>Français</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-4 rounded-[12px] rounded-[12px] bg-board-black/5 gap-3 flex flex-col">
                                    <div className="text-board-black/80">Dernière séance</div>
                                    <div className="text-board-black/40 flex flex-col items-start justify-start gap-2 text-[15px]">
                                        <ul className='list-disc pl-6 gap-2 flex flex-col'>
                                            <li>Mathématiques </li>
                                            <li>12 juillet 2026</li>
                                            <li>Compte rendu disponible</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-4 rounded-[12px] rounded-[12px] bg-board-black/5 gap-3 flex flex-col">
                                    <div className="text-board-black/80">Prochaine séance</div>
                                    <div className="text-board-black/40 flex flex-col items-start justify-start gap-2 text-[15px]">
                                        <ul className='gap-2 flex flex-col'>
                                            <li className='flex items-center justify-start gap-1'><Planning className='fill-board-black/40' /> Mercredi 16 juillet</li>
                                            <li className='flex items-center justify-start gap-1'><Hour className='fill-board-black/40' /> 16h00 - 18h00</li>
                                            <li className='flex items-center justify-start gap-1'><Book className='fill-board-black/40' /> Physique-Chimie</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button className='border-2 border-board-black bg-board-black/5 hover:bg-board-black/10 h-9.5!'>Consulter le suivi <Arrow className='fill-board-black' /></Button>
                    </div>
                    <div className="bg-white w-full flex flex-col justify-start items-start gap-3 p-4 rounded-[8px]">
                        <div className="text-board-black/80">Actions nécessitant votre attention</div>
                        <div className="flex items-start justify-start pl-3 pt-3">
                            <div className="border-l border-l-board-black/20 pl-8 pt-2 pr-2 relative flex flex-col items-start justify-center gap-2 relative">
                                <div className="flex flex-col items-start justify-center">
                                    <div className="text-board-black/80">Validation requise</div>
                                    <div className="text-board-black/50 text-[15px]">Cours de Mathématiques du 12 juillet</div>
                                </div>
                                <Button className='border-2 border-board-black bg-poppy-red h-9.5!'>Confirmer</Button>
                                <div className="absolute -translate-1/2 left-0 top-0 h-3.5 w-3.5 border-1 border-poppy-red bg-poppy-red/20 flex items-center justify-center rounded-full p-[3px]">
                                    <div className="w-full h-full bg-poppy-red rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start justify-start pl-3 pt-3">
                            <div className="border-l border-l-board-black/20 pl-8 pt-2 pr-2 relative flex flex-col items-start justify-center gap-2 relative">
                                <div className="flex flex-col items-start justify-center">
                                    <div className="text-board-black/80">Nouveau rapport disponible</div>
                                    <div className="text-board-black/50 text-[15px]">Compte rendu du cours de Français</div>
                                </div>
                                <Button className='border-2 border-board-black bg-olive-green h-9.5!'>Lire le rapport</Button>
                                <div className="absolute -translate-1/2 left-0 top-0 h-3.5 w-3.5 border-1 border-olive-green bg-olive-green/20 flex items-center justify-center rounded-full p-[3px]">
                                    <div className="w-full h-full bg-olive-green rounded-full"></div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start justify-start pl-3 pt-3">
                            <div className="border-l border-l-board-black/20 pl-8 pt-2 pr-2 relative flex flex-col items-start justify-center gap-2 relative">
                                <div className="flex flex-col items-start justify-center">
                                    <div className="text-board-black/80">Information administrative</div>
                                    <div className="text-board-black/50 text-[15px]">Modification du cours de vendredi</div>
                                </div>
                                <Button className='border-2 border-board-black bg-shade-cyan h-9.5!'>Consulter</Button>
                                <div className="absolute -translate-1/2 left-0 top-0 h-3.5 w-3.5 border-1 border-shade-cyan bg-shade-cyan/20 flex items-center justify-center rounded-full p-[3px]">
                                    <div className="w-full h-full bg-shade-cyan rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-[8px]">
                    <div className="flex items-center justify-start gap-2">
                        <div className="bg-board-black/10 rounded h-8 w-8 p-1 flex items-center justify-center"><img src="/images/dashboard/report.png" className='h-full' alt="Report" /></div>
                        <div className="text-board-black/60">2 rapports non consultés · Dernier rapport : Français · Hier</div>
                    </div>
                    <Button className='border-2 border-board-black bg-board-black/5 hover:bg-board-black/10 h-9.5! px-3!'><Arrow className='fill-board-black' /></Button>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-full p-4 bg-white rounded-[8px]">
                    <div className="">Activité récente</div>
                    <div className="grid grid-cols-4 gap-4 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <div className="w-full flex flex-col items-center justify-start gap-3">
                                <div className="relative w-full flex items-center justify-between group [&>div]:bg-board-black/20 [&>div]:duration-300 [&>div]:group-hover:bg-blue-navy/50 [&>div]:h-8 [&>div]:w-0.5 [&>div]:rounded">
                                    {repeat(activityBar, (i) => (
                                        <div key={i} className=""></div>
                                    ))}
                                    <div className="absolute w-9.5 flex items-center justify-center h-3.5 rounded-full -translate-1/2 -right-2.5 top-1/2 bg-transparent!">
                                        <div className="shrink-0 bg-board-black/20 duration-300 group-hover:bg-blue-navy/50 h-px w-3 rounded-full"></div>
                                        <div className="shrink-0 bg-board-black/20 border border-board-black/20 duration-300 group-hover:bg-blue-navy/20 h-3.5 w-3.5 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-board-black/20 duration-300 group-hover:bg-blue-navy/50"></div>
                                        </div>
                                        <div className="shrink-0 bg-board-black/20 duration-300 group-hover:bg-blue-navy/50 h-px w-3 rounded-full"></div>
                                    </div>
                                    
                                </div>
                                <div className="w-full flex flex-col items-center justify-start gap-3">
                                    <div className="w-full flex flex-col items-center justify-start">
                                        <div className="text-board-black/80 leading-6 text-[16px]">Aujourd'hui</div>
                                        <div className="text-board-black/60 text-[14px] leading-6">Compte rendu ajouté</div>
                                    </div>
                                    <Button className='border-2 border-board-black bg-board-black/10 h-6! px-3! text-[13px]'>Voir la liste</Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <div className="w-full flex flex-col items-center justify-start gap-3">
                                <div className="relative w-full flex items-center justify-between group [&>div]:bg-board-black/20 [&>div]:duration-300 [&>div]:group-hover:bg-poppy-red/50 [&>div]:h-8 [&>div]:w-0.5 [&>div]:rounded">
                                    {repeat(activityBar, (i) => (
                                        <div key={i} className=""></div>
                                    ))}
                                    <div className="absolute w-9.5 flex items-center justify-center h-3.5 rounded-full -translate-1/2 -right-2.5 top-1/2 bg-transparent!">
                                        <div className="shrink-0 bg-board-black/20 duration-300 group-hover:bg-poppy-red/50 h-px w-3 rounded-full"></div>
                                        <div className="shrink-0 bg-board-black/20 border border-board-black/20 duration-300 group-hover:bg-poppy-red/20 h-3.5 w-3.5 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-board-black/20 duration-300 group-hover:bg-poppy-red/50"></div>
                                        </div>
                                        <div className="shrink-0 bg-board-black/20 duration-300 group-hover:bg-poppy-red/50 h-px w-3 rounded-full"></div>
                                    </div>

                                </div>
                                <div className="w-full flex flex-col items-center justify-start gap-3">
                                    <div className="w-full flex flex-col items-center justify-start">
                                        <div className="text-board-black/80 leading-6 text-[16px]">Hier</div>
                                        <div className="text-board-black/60 text-[14px] leading-6">Cours validé</div>
                                    </div>
                                    <Button className='border-2 border-board-black bg-board-black/10 h-6! px-3! text-[13px]'>Voir la liste</Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <div className="w-full flex flex-col items-center justify-start gap-3">
                                <div className="relative w-full flex items-center justify-between group [&>div]:bg-board-black/20 [&>div]:duration-300 [&>div]:group-hover:bg-olive-green/50 [&>div]:h-8 [&>div]:w-0.5 [&>div]:rounded">
                                    {repeat(activityBar, (i) => (
                                        <div key={i} className=""></div>
                                    ))}
                                    <div className="absolute w-9.5 flex items-center justify-center h-3.5 rounded-full -translate-1/2 -right-2.5 top-1/2 bg-transparent!">
                                        <div className="shrink-0 bg-board-black/20 duration-300 group-hover:bg-olive-green/50 h-px w-3 rounded-full"></div>
                                        <div className="shrink-0 bg-board-black/20 border border-board-black/20 duration-300 group-hover:bg-olive-green/20 h-3.5 w-3.5 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 rounded-full bg-board-black/20 duration-300 group-hover:bg-olive-green/50"></div>
                                        </div>
                                        <div className="shrink-0 bg-board-black/20 duration-300 group-hover:bg-olive-green/50 h-px w-3 rounded-full"></div>
                                    </div>

                                </div>
                                <div className="w-full flex flex-col items-center justify-start gap-3">
                                    <div className="w-full flex flex-col items-center justify-start">
                                        <div className="text-board-black/80 leading-6 text-[16px]">Lundi</div>
                                        <div className="text-board-black/60 text-[14px] leading-6">Nouveau cours programmé</div>
                                    </div>
                                    <Button className='border-2 border-board-black bg-board-black/10 h-6! px-3! text-[13px]'>Voir la liste</Button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 w-full">
                            <div className="w-full flex flex-col items-center justify-start gap-3">
                                <div className="relative w-full flex items-center justify-between group [&>div]:bg-board-black/20 [&>div]:duration-300 [&>div]:group-hover:bg-marigold-amber/50 [&>div]:h-8 [&>div]:w-0.5 [&>div]:rounded">
                                    {repeat(activityBar, (i) => (
                                        <div key={i} className=""></div>
                                    ))}
                                </div>
                                <div className="w-full flex flex-col items-center justify-start gap-3">
                                    <div className="w-full flex flex-col items-center justify-start">
                                        <div className="text-board-black/80 leading-6 text-[16px]">Samedi</div>
                                        <div className="text-board-black/60 text-[14px] leading-6">Affectation d'un enseignant</div>
                                    </div>
                                    <Button className='border-2 border-board-black bg-board-black/10 h-6! px-3! text-[13px]'>Voir la liste</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-full p-4 bg-white rounded-[8px]">
                    <div className="">Cours d'aujourd'hui</div>
                    <DashboardSubjectDataTable subjects={subjectTableData} />
                </div>
            </div>
        </Wrapper>
    )
}

export default Home
