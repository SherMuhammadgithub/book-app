import React from 'react'
import { Accordion } from 'flowbite-react';
export default function Faq() {
    return (
        <section>
            <h1 className='text-3xl text-center font-medium my-5 font-[Lobster]'style={{letterSpacing:"4px"}}>FAQ</h1>
            <Accordion collapseAll className='mx-4 md:mx-32 lg:mx-56 xl:mx-96'>
                <Accordion.Panel>
                    <Accordion.Title>What is LibertyBooks?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, esse!
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Need Interesting Books?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, sit.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Shipping Methods?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ad nisi doloremque quos repudiandae est aliquam obcaecati rerum numquam voluptates! Architecto officiis dicta, nam iusto corrupti quod nulla nemo ratione?
                        </p>


                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </section>
    )
}
