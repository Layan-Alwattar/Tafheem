import type { WaitlistPayload } from "../types";
import Icon from "./Icon";
import WaitlistForm from "./WaitlistForm";

interface EarlyAccessProps {
  onJoinWaitlist?: (payload: WaitlistPayload) => void | Promise<void>;
}

export default function EarlyAccess({ onJoinWaitlist }: EarlyAccessProps) {
  return (
    <section
      id="early-access"
      className="py-20 md:py-28 px-5 md:px-8 bg-background relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface-container-low border-2 border-gold/40 rounded-xl p-8 sm:p-12 shadow-parchment relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs uppercase font-sans font-bold text-secondary tracking-widest">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span>Early Believer Access</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl text-primary font-medium leading-tight">
                Be among the first to experience Tafheem.
              </h2>
              <p className="font-serif text-base text-on-surface-variant leading-relaxed">
                We are building an unhurried, intentional space for anyone who wants to rediscover
                their relationship with the Qur’an.
              </p>

              <div className="p-4 bg-surface-container rounded-lg border border-outline-variant/30 flex items-center gap-4">
                <div className="p-3 bg-secondary-container/60 rounded-full text-secondary">
                  <Icon name="group" className="text-2xl" />
                </div>
                <div>
                  <div className="font-sans text-2xl font-bold text-primary">250+ Believers</div>
                  <div className="text-xs font-sans text-outline">
                    Preparing for launch · Invitations roll out soon
                  </div>
                </div>
              </div>

              <div className="text-xs font-sans text-outline space-y-1">
                <p>✓ No spam, ever.</p>
                <p>✓ Early access to the interactive word explorer</p>
                <p>✓ Direct channel to share feedback with founders</p>
              </div>
            </div>

            <WaitlistForm onSubmit={onJoinWaitlist} />
          </div>
        </div>
      </div>
    </section>
  );
}
