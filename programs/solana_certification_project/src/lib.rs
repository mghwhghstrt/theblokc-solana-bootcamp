use anchor_lang::prelude::*;
use solana_program::entrypoint::ProgramResult;

declare_id!("8GVzQyFbrrCXDx2huDoB8AXgriv6ZCNCnvCbDoqtWhgN");

#[program]
pub mod solana_certification_project {
    use super::*;

    pub fn store_text(ctx: Context<StoreText>, text: String) -> ProgramResult {        
        let text_account: &mut Account<TextAccount> = &mut ctx.accounts.text_account;
        text_account.text = text.to_string();
        msg!("Your Input was {}", text_account.text);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct StoreText<'info> {
    #[account(init, payer = user, space = TextAccount::LEN)]
    pub text_account: Account<'info, TextAccount>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct TextAccount {
    pub text: String,
}

impl TextAccount {
    const LEN: usize = 1132; // space allocated for input
}
